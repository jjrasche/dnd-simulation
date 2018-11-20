import { BaseObject } from "../../models/base.object";

export enum EquipmentCategory {
    Gear = "Gear",
    Armor = "Armor",
    Vehicle = "Vehicle",
    Tools = "Tools",
    Weapon = "Weapon",
}

export abstract class EquipmentObject extends BaseObject{
    // base object
    description: string;
    // type: ObjectType;
    key?: string;

    // equipment object
    equipmentCategory?: EquipmentCategory;
    cost: number;   // gold standard e.g. 1 copper = .01 cost
    weight: number;
    inUse?: boolean = false;     // attempting to implement the concept that a Build having access to many e.g. weapons, but only able to use a limited number per round
    quantity?: number = 1;
}
    