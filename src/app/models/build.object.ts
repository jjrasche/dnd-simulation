import { Build } from "./build.model";
import { BaseObject, IBaseObject } from "./base.object";

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

export class BuildEffect {
    // Name of the mofifying BuildAffectingObject.
    name: string;
    // The property on the build that will be modified.
    property: string;
    // Possible means to control order of application e.g. ApplyLast.
    type?: any;
    effect: (b: Build) => void;

    constructor(name: string, property: string, effect: (b: Build) => void) {
        this.name = name;
        this.property = property;
        this.effect = effect;
    }
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