import { EquipmentObject } from "./equipment.model";
import { Build } from "src/app/models/build.model";
import { ArmorEnum } from "src/app/enum/equipment/armor.enum";
import { BuildAffectingObject } from "../build.object";
import { ArmorCategory } from "src/app/enum/equipment/armor-category.enum";

export interface ArmorClassObject {
    base: number;
    addDex: boolean;
    maxDex: number;
}

export class ArmorObject extends EquipmentObject implements BuildAffectingObject {
    category: ArmorCategory;
    strengthNeeded: number;
    stealthDisadvantage: boolean;
    armorClass: ArmorClassObject;

    effect(b: Build): void {
        // proficiency check if not dex/str checks, throws, attacks have disadvantage, prevent spell casting actions
    };
};

export type ArmorMapType = { [key in ArmorEnum]: ArmorObject };
export const Armor: ArmorMapType = {
    Padded: {
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 8,
        cost: 5,
        armorClass: { base: 11, addDex: true, maxDex: null },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    Leather: {
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 10,
        cost: 10,
        armorClass: { base: 11, addDex: true, maxDex: null },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    StuddedLeather: {
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 13,
        cost: 45,
        armorClass: { base: 12, addDex: true, maxDex: null },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    Hide: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 12,
        cost: 10,
        armorClass: { base: 12, addDex: true, maxDex: 2 },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    ChainShirt: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 20,
        cost: 50,
        armorClass: { base: 13, addDex: true, maxDex: 2 },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    ScaleMail: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 45,
        cost: 50,
        armorClass: { base: 14, addDex: true, maxDex: 2 },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    Breastplate: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 20,
        cost: 400,
        armorClass: { base: 14, addDex: true, maxDex: 2 },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    HalfPlate: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 40,
        cost: 750,
        armorClass: { base: 15, addDex: true, maxDex: 2 },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    RingMail: {
        category: ArmorCategory.Heavy,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 40,
        cost: 30,
        armorClass: { base: 14, addDex: false, maxDex: null },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    ChainMail: {
        category: ArmorCategory.Heavy,
        strengthNeeded: 13,
        stealthDisadvantage: true,
        weight: 55,
        cost: 75,
        armorClass: { base: 16, addDex: false, maxDex: null },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    Splint: {
        category: ArmorCategory.Heavy,
        strengthNeeded: 15,
        stealthDisadvantage: true,
        weight: 60,
        cost: 200,
        armorClass: { base: 17, addDex: false, maxDex: null },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    Plate: {
        category: ArmorCategory.Heavy,
        strengthNeeded: 15,
        stealthDisadvantage: true,
        weight: 65,
        cost: 1500,
        armorClass: { base: 18, addDex: false, maxDex: null },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
    Shield: {
        category: ArmorCategory.Shield,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 6,
        cost: 10,
        armorClass: { base: 2, addDex: false, maxDex: null },
        description: "",
        effect: ArmorObject.prototype.effect,
    },
};

// // Add EquipmentCategory.Tools to all tools.
// Object.keys(Armor).forEach(key => Armor[key].EquipmentCategory = EquipmentCategory.Armor);

export const AllArmor: ArmorObject[] = Object.keys(Armor).map(key => Armor[key]);
export const LightArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Light);
export const MediumArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Medium);
export const HeavyArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Heavy);
export const Shields: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Shield);
