import { Weapon, WeaponEnum, WeaponObject } from "./weapon.enum";
import { Tool, ToolEnum, ToolObject } from "./tools.enum";
import { GearObject, GearEnum, Gear } from "./gear.enum";
import { PackEnum, PackObject, Pack } from "./pack.enum";
import { ArmorEnum, ArmorObject, Armor } from "./armor.enum";

// needed to separate this from equipment.enum.ts to prevent circular dependencies
export const Equipment: 
    { [key in WeaponEnum |ToolEnum | GearEnum | PackEnum | ArmorEnum ]: WeaponObject |ToolObject | GearObject | PackObject | ArmorObject } = { ...Weapon, ...Tool, ...Gear, ...Pack, ...Armor } ;
