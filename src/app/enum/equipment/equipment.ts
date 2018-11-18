import { Weapon, WeaponEnum, WeaponObject } from "./weapon.enum";
import { Tool, ToolEnum, ToolObject } from "./tools.enum";
import { GearObject, GearEnum, Gear } from "./gear.enum";
import { PackEnum, PackObject, Pack } from "./pack.enum";
import { ArmorEnum, ArmorObject, Armor } from "./armor.enum";

// needed to separate this from equipment.enum.ts to prevent circular dependencies
// Equipment.<Any enum extending EquipmentObject>
export const EquipmentEnums = [WeaponEnum, ToolEnum, GearEnum, PackEnum, ArmorEnum];
export type EquipmentEnums = WeaponEnum | ToolEnum | GearEnum | PackEnum | ArmorEnum;
export type EquipmentClasses = WeaponObject | ToolObject | GearObject | PackObject | ArmorObject;
export let EquipmentData = { ...Weapon, ...Tool, ...Gear, ...Pack, ...Armor };
export const Equipment: { [key in EquipmentEnums]: EquipmentClasses } = EquipmentData;
