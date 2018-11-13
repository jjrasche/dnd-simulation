export enum EquipmentCategory {
    Gear = "Gear",
    Armor = "Armor",
    Vehicle = "Vehicle",
    Tools = "Tools",
    Weapon = "Weapon",

}
export abstract class EquipmentObject {
    cost: number;   // gold standard e.g. 1 copper = .01 cost
    weight: number;
    description: String;
    inUse?: boolean = false;     // attempting to implement the concept that a Build having access to many e.g. weapons, but only able to use a limited number per round
}
    