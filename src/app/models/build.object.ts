import { Build } from "./build.model";
import { BaseObject, IBaseObject } from "./base.object";
import { Type } from "@angular/compiler";

/**
 * Describes objects that can alter properties on a build.
 * To better track interactions when applying changes to build properties,
 * the effects are aggregated then acted upon. This will allow
 * to control when and how effects are applied with respect to one another.
 * 
 * each effect should change only one property on a build 
 */
export interface BuildAffectingObject {
    mod?: BuildEffect[];
}

export interface ActionableObject {
    can: (b: Build) => boolean;
}

export type BaseBuildAffectingConstructor = IBaseObject & BuildAffectingObject;

/**
 * Object inherited by any system object that can make modifications to a build.
 * 
 * @param mod is a list of buildEffect that will be applied to the build.
 */
export abstract class BaseBuildAffectingObject extends BaseObject implements BuildAffectingObject {
    mod: BuildEffect[];

    constructor(obj: BaseBuildAffectingConstructor) {
        super(obj)
        this.mod = obj.mod || [];
    }
}



function applyEffect(build: Build, be: BuildEffect): void {
    if(be /*&& obj.effect*/) {
        let prevValue = JSON.stringify(build[be.modifyingProperty]);

        // use effect for BuildEffects that still use functions  TODO: remove when all BEs converted
        if (be.effect) {
            be.effect(build);
        }
        else {
            if (be.condition) {
                switch (be.operation) {
                    case BuildEffectOperation.Add:
                        build[be.modifyingProperty] += be.value;
                        break;
                    case BuildEffectOperation.Initialize:
                        build[be.modifyingProperty] = be.value;
                        break;
                }
            }
        }

        if (be.modifyingProperty == "armorClass" && be.condition) {
            console.log(`${be.name} changed property ${be.modifyingProperty} from '${prevValue}' to '${JSON.stringify(build[be.modifyingProperty])}'`);
        }
    }
}

/**
 * Aggregates BuildEffects and runs them.
 * 
 * @returns a build with all the buildEffect modifications
 */
export function RunBuildEffects(build: Build): Build {
    let effects: Array<BuildEffect> = build.modifications;
    // order in groups by BuildEffect
    const effectsByOperation = groupList<BuildEffect>(BuildEffectOperation, effects, 
        (be: BuildEffect, op: BuildEffectOperation) => be.operation === op);
    console.log(effectsByOperation)

    effects.forEach((be: BuildEffect) => applyEffect(build, be));
    return null;
    
}

/**
 * @returns a 
 */
export function groupList<T>(categories: any, list: Array<T>, groupingMethod: (t: T, category: any) => boolean): Object {
    if (list == null) {
        return {};
    }
    let categoriesList = Object.keys(categories);
    let groupedList = {};
    categoriesList.forEach(category => {
        groupedList[category] = list.filter((item: T) => groupingMethod(item, category));
    });
    return groupedList;
}


/**
 * Describing how to carry out the modification of a single build property.
 * 
 * @example
 * // +1 to intelligence
 * new BuildEffect({
 *  name: "chain mail - armor",
 *  property: "ability.intelligence",
 *  operation: BuildEffectOperation.Add,
 *  value: 1,
 * })
 * 
 * @param name of the source of the effect e.g. "chain mail - armor".
 * @param modifyingProperty name of the buid property being modified e.g. "ability.intelligence".
 * @para dependentProperties properties of the build that are needed to calculate value of the change.
 * @param operation to apply to the build property (increase, decrease, add, remove, override, initialize).
 * @param value of the change made, may need to make this a mini DSL to utilize the dependentProperties in the calculatio
 * @param condition a logical statement that will be ran to determine if this buildEffect is applied.
 *  this string is limited to the conditional operators, logic operators, letters, numbers, and '.'.
 *  null defaults to true.
 * 
 * @todo There is a conflict between needing to describe complex conditional behavior like armor's effect on AC
 *  and not giving a BuildEffect the full power of functions.  Serializable 
 *  - I don't want BuildEffect to store functions because it's
 *      - dangerous to allow users to run their own functions
 *      - harder to track cause and effect of changes
 *      - would make the UX of creating a BuildEffect more difficult and require programming knowledge.
 *  - value can depend on inputs, affected build, initiator, Object action is tied to.
 *  - can have conditions tied to the BuildEffect being applied
 * 
 * armor AC value = 
 *  if (add dex)
 *      if ( no max dex)
 *          return armor.armorEffect.base + b.abilityModifier.Dexterity
 *      else 
 *          return armor.armorEffect.base + Math.min(b.abilityModifier.Dexterity, armor.armorEffect.maxDex)
 *  else
 *      return armor.armorEffect.base
 */
export class BuildEffect {
    name: string;
    modifyingProperty: string;
    // dependentProperties?: string[];
    operation?: BuildEffectOperation;
    value?: any;
    condition?: any;

    effect?: (b: Build) => void;

    constructor(obj: BuildEffect) {
        this.name = obj.name;
        this.modifyingProperty = obj.modifyingProperty;
        this.operation = obj.operation;
        this.value = obj.value;
        this.condition = obj.condition;
        this.effect = obj.effect;
    }
}

// alpha numberic, logic operators, compare operators, and basic math operators
const expresionStringInvalidCharacters = /[^a-zA-Z0-9\.\s=!<>&|+-/*?:]+/g;
export function checkExpression(expression: string) {
    // Verify expression can only have limited set of characters.
    console.log(`inside: ${expression}`);
    if (expression && expression.match(expresionStringInvalidCharacters)) {
        let invlalidCharacters = expression.match(expresionStringInvalidCharacters).join();
        throw new Error(`The expression '${expression}' contains invalid characters '${invlalidCharacters}'`)
    }
}

/**
 * Type of change to make to the build. Operations are listed in the order in which they are applied. 
 * Any push or remove effect will be applied first as they can alter current BuildEffects by adding or removing BuildAffectingObjects
 * No use of initialize on object is forseen.
 * 
 * 
 * @property {enum} Push            - (array) adds element to a list    e.g. a spell that lets you speak Elvish.
 * @property {enum} Remove          - (array) removes an element from a list    e.g. magic armor that removes the exhausted condition.
 * @property {enum} Initialize      - (number | string) sets the value of the property before any other build effects are applied.
 * @property {enum} Add             - (number) addition operation on a number property.
 * @property {enum} Subtract        - (number) subtraction operation on a number property.
 * @property {enum} Multiply        - (number) multiplication operation on a number property.
 * @property {enum} Divide          - (number) division operation on a number property.
 * @property {enum} Override        - (number | string) overwrites the value of the property even if other build effects modify the propety.
 */
export enum BuildEffectOperation {
    Push = "Push",
    Remove = "Remove",
    Initialize = "Initialize",
    Add = "Add",
    Subtract = "Subtract",
    Multiply = "Multiply",
    Divide = "Divide",
    Override = "Override",
}

/**
 * Take some BaseObject data representing an aspect of a build e.g. Class.savingThrows, background.skills
 * iterate over that data and add it's modification effect to the build. getBaseObjectArray is a method
 * rather than simply a BaseObject[] to avoid null checks, if application fails due to a null ObjectArray
 * this is an acceptable setting of the data.
 * 
 * @example
 * applyToBuild(() => this.skill.inherent, k => b.skill[k] = true);
 * 
 * @param getBaseObjectArray method retrieving objects to modify build.
 * @param modifier method making modicication to the build based on each element of the BaseObject[].
 */
export const applyToBuild = (getBaseObjectArray: () => BaseObject[], modifier: (key: string, objArray?: BaseObject[]) => void) => {
    let objArray: Array<BaseObject>;
    try {
        objArray = getBaseObjectArray();
    } catch (e) { }

    if (objArray) {
        objArray.map(obj => obj.key).forEach((key: string) => {
            modifier(key, objArray);
        });
    }
};

/**
 * Take some plain Object data representing an aspect of a build e.g. Race.abilityModifier
 * iterate over that data and add it's modification effect to the build.
 * 
 * @example
 *  applyToBuildFromObject(() => this.abilityModifier, (k, a) => b.ability[k] += a[k])
 * 
 * @param getBaseObjectArray method retrieving objects to modify build.
 * @param modifier method making modicication to the build based on each element of the BaseObject[].
 */
export const applyToBuildFromObject = (getBaseObjectArray: () => Object, modifier: (key: string, objArray?: Object) => void) => {
    let obj: Object;
    try {
        obj = getBaseObjectArray();
    } catch (e) { }

    if (obj) {
        Object.keys(obj).forEach((key: string) => {
            modifier(key, obj);
        });
    }
};