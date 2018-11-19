/**
 * starting_equipment":[\[{}A-Za-z0-9":/\.,’'\n\s]*]
 */

import { Build } from "./build.model";
import { Die } from "../enum/die.enum";
import { BaseObject } from "../enum/base-object.model";

export interface settings<T> {
    // have all these settings
    inherent: Array<T>;
    // can make multiple choices about which settings to take 
    selectable: choiceSettings<T>[];
}

export interface choiceSettings<T> {
    // can choose from these options
    options: Array<T>;
    // can choose num things from these options
    num: number;
}

export interface settingsWithGroupedOptions<T> {
    // have all these settings
    inherent: Array<T>;
    // can make multiple choices about which settings to take 
    selectable: groupedChoiceSettings<T>[];
}

export interface groupedChoiceSettings<T> {
    // can choose from these groups
    groups: Array<T[]>;
    // can choose num groups from these options
    num: number;
}

export interface BuildAffectingObject {
    effect(b: Build): void;
}

/**
 * Describes objects that can alter properties on a build.
 * To better track interactions when applying changes to build properties,
 * the effects are aggregated then acted upon. This will allow
 * to control when and how effects are applied with respect to one another.
 * 
 * each effect should change only one property on a build 
 */
export interface BuildAffectingObject2 {
    mod: BuildEffect[];
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

export interface ActionableObject {
    can: (b: Build) => boolean;
}

/**
 * 
 * @param enums Array of enums to compare keys across.
 * returns an object with enum keys as key and value as number of ocurrences.
 * Complexity O(n) where n is number of enum keys between all enums.
 */
export const enumKeysCount = (enums: Object[]): Object => enums.reduce((acc: Object, currEnum: Object) => {
    // add this enums keys to any existing key, incrementing by 1 if that key already existed.
    let currEnumCount =
        Object.keys(currEnum).reduce((accInner: { string: number }, curr: string) =>
            ({ ...accInner, [curr]: (acc[curr] || 0) + 1 }), {});

    return { ...acc, ...currEnumCount };
}, {});

// add enum as the key property on all objects for tracking in arrays
/**
 * 
 * @param objects objects to make standardized changes to.
 * @param modifier function that makes changes to objects.
 * @param enums enums to verify uniqueness.
 */
export function modifyDataStructure(object: Object, objectModifiers: Array<ObjectModifier>) {
    // apply all modifiers to each property in object.
    Object.keys(object).forEach(key => {
        objectModifiers.forEach((modifier: ObjectModifier) => modifier(object, key))
    });
}

// verify enums that specify items in the object are all unique and no conflicts exist.
export function verifyEnumKeyUniqueness(enums: Array<Object>) {
    if (!!enums && enumsDuplicated(enums)) {
        throw (`The following keys are dupliactated on Object Enums: '${getDuplicatedEnumKeys(enums)}'`)
    }
}

export type ObjectModifier = (obj: Object, key: string) => void;
export const addKeyModifier: ObjectModifier = (obj: Object, key: string): void => { obj[key].key = key };

/**
 * @param dict dictionary created from enumKeysCount with value being num occurrences of that key
 * returns list of all keys used more than once
 */
export const getDuplicatedEnumKeys = (enums: Object[]): Array<Object> => {
    const enumKeyCounts = enumKeysCount(enums);
    return Object.keys(enumKeyCounts).filter(key => enumKeyCounts[key] > 1);
}
export const enumsDuplicated = (enums: Object[]): boolean => getDuplicatedEnumKeys(enums).length > 0;

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
    } catch (e) {}

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

