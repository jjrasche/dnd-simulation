/**
 * "starting_proficiencies:": [\[{}A-Za-z0-9":/\.,\n\s]*],
 */

import { Build } from "./build.model";

export interface settings<T> {
    inherent: Array<T>;
    selectable: optionalSettings<T>[];
}

export interface optionalSettings<T> {
    options: Array<T>;
    num: number;
}

export abstract class EnumBased {
    enum?: string
}

/**
 * An object that has an effect that can modify some property on the build.
 */
export interface BuildAffectingObject {
    effect(b: Build): void;
}

export interface ActionableObject {
    can: (b: Build) => boolean;
}