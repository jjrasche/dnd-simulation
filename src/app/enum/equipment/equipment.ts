import { Weapon, WeaponEnum, WeaponObject } from "./weapon.enum";
import { Tool, ToolEnum, ToolObject } from "./tools.enum";

// needed to separat this from equipment.enum.ts to prevent circular dependencies
export const Equipment: { [key in WeaponEnum | ToolEnum]: WeaponObject | ToolObject } = { ...Weapon, ...Tool } ;
