import { Weapon, WeaponEnum, WeaponObject } from "./weapon.enum";
import { Tool, ToolEnum, ToolObject } from "./tools.enum";
import { GearObject, GearEnum, Gear } from "./gear.enum";
import { PackEnum, PackObject, Pack } from "./pack.enum";
import { ArmorEnum, ArmorObject, Armor } from "./armor.enum";
import { modifyDataStructure, verifyEnumKeyUniqueness, ObjectModifier } from "src/app/models/common";
import { EquipmentCategory } from "./equipment.enum";

// needed to separate this from equipment.enum.ts to prevent circular dependencies
// Equipment.<Any enum extending EquipmentObject>
export const EquipmentEnums = [WeaponEnum, ToolEnum, GearEnum, PackEnum, ArmorEnum];
const EquipmentClasses = [WeaponObject, ToolObject, GearObject, PackObject, ArmorObject];

export type EquipmentEnums = WeaponEnum | ToolEnum | GearEnum | PackEnum | ArmorEnum;
export type EquipmentClasses = WeaponObject | ToolObject | GearObject | PackObject | ArmorObject;
export let EquipmentData = { ...Weapon, ...Tool, ...Gear, ...Pack, ...Armor };
export const Equipment: { [key in EquipmentEnums]: EquipmentClasses } = EquipmentData;

/**
 * add key to all objects and verify the enums that make up Object are unique.
 */
export function initializeEquipment() {
    // add Key to all objects
    // modifyDataStructure(EquipmentData, [addEquipmentCategory]);
    verifyEnumKeyUniqueness(EquipmentEnums);
}

const addEquipmentCategory: ObjectModifier = (obj: Object, key: string): void => { 
    let currrObj = obj[key];
    for (let i = 0; i < EquipmentClasses.length; i++) {
        if (currrObj instanceof EquipmentClasses[i]) {
            currrObj.equipmentCategory = EquipmentClasses[i].name.slice("Object".length) as EquipmentCategory;
            return;
        }
    }
    throw Error(`object ${JSON.stringify(obj)} is not of any of the types '${EquipmentClasses}'`);
};

export interface BaseObject {
    // allows comparisons between objects to easily be made
    key?: string;
    description: string;
    // type: ObjectType;
}
