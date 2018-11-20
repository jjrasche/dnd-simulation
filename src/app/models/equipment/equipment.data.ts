import { WeaponEnum } from "src/app/enum/equipment/weapon.enum";
import { ToolEnum } from "src/app/enum/equipment/tools.enum";
import { GearEnum } from "src/app/enum/equipment/gear.enum";
import { PackEnum } from "src/app/enum/equipment/pack.enum";
import { ArmorEnum } from "src/app/enum/equipment/armor.enum";
import { WeaponObject, Weapon } from "./weapon.model";
import { ToolObject, Tool } from "./tools.model";
import { GearObject, Gear } from "./gear.model";
import { PackObject, Pack } from "./pack.model";
import { ArmorObject, Armor } from "./armor.model";
import { verifyEnumKeyUniqueness, ObjectModifier } from "../model-initialization";
import { EquipmentCategory } from "./equipment.model";

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
