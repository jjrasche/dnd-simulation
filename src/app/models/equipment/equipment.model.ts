import { BaseObject, IBaseObject } from "../../models/base.object";
import { BuildAffectingObject, BuildEffect, BaseBuildAffectingConstructor, BaseBuildAffectingObject } from "../build.object";

export interface IEquipmentObject {
    cost: number;
    weight: number;
    inUse?: boolean;
    quantity?: number;
}

export type EquipmentObjectConstructor = IBaseObject & IEquipmentObject;
export type BaseBuildAffectingEquipmentConstructor = IBaseObject & IEquipmentObject & BuildAffectingObject;

export abstract class EquipmentObject extends BaseBuildAffectingObject {
    cost: number;
    weight: number;
    inUse?: boolean = false;
    quantity?: number = 1;

    constructor(obj: EquipmentObjectConstructor) {
        super(obj)
    }
}

/**
 * Object inherited by any Equipment object that can make modifications to a build.
 * 
 * @param mod is a list of buildEffect that will be applied to the build.
 * @param cost represents the price paid for the object in gold standard e.g. 1 copper = .01 cost.
 * @param weight how much the object weighs.
 * @param inUse attempting to implement the concept that a Build having access to many e.g. weapons, but only able to use a limited number per round.
 * @param quantity the number of the equipment wihtin this object.
 */
export abstract class BaseBuildAffectingEquipmentObject extends EquipmentObject implements BuildAffectingObject {
    mod: BuildEffect[];
    cost: number;
    weight: number;
    inUse?: boolean = false;
    quantity?: number = 1;

    constructor(obj: BaseBuildAffectingEquipmentConstructor) {
        super(obj)
        this.mod = obj.mod || [];
    }
}
