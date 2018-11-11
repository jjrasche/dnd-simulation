import { Weapon } from "./weapon.enum";
import { Tool } from "./tools.enum";

export enum EquipmentCategory {
    Gear = "Gear",
    Armor = "Armor",
    Vehicle = "Vehicle",
    Tools = "Tools",
    Weapon = "Weapon",

}
export interface EquipmentObject {
    cost: number;   // gold standard e.g. 1 copper = .01 cost
    weight: number;
    description: String;
};

// export class Equipment: EquipmentObject = Weapon | Tool;
