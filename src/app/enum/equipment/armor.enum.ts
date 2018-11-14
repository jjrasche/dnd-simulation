import { Die } from "../die.enum";
import { DamageType, DieDamage, AmountDamage } from "../damage.enum";
import { EquipmentObject, EquipmentCategory } from "./equipment.enum";
import { BuildAffectingObject } from "src/app/models/common";
import { Build } from "src/app/models/build.model";

export enum ArmorEnum {
};

export enum ArmorCategory {
    Light = "Light",
    Medium = "Medium",
    Heavy = "Heavy",
    Shield = "Shield",
}

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
    },
    Leather: {
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 10,
        cost: 10,
        armorClass: { base: 11, addDex: true, maxDex: null },
    },
    StuddedLeather: {
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 13,
        cost: 45,
        armorClass: { base: 12, addDex: true, maxDex: null },
    },
    Hide: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 12,
        cost: 10,
        armorClass: { base: 12, addDex: true, maxDex: 2 },
    },
    ChainShirt: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 20,
        cost: 50,
        armorClass: { base: 13, addDex: true, maxDex: 2 },
    },
    ScaleMail: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 45,
        cost: 50,
        armorClass: { base: 14, addDex: true, maxDex: 2 },
    },
    Breastplate: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 20,
        cost: 400,
        armorClass: { base: 14, addDex: true, maxDex: 2 },
    },
    HalfPlate: {
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 40,
        cost: 750,
        armorClass: { base: 15, addDex: true, maxDex: 2 },
    },
    RingMail: {
        category: ArmorCategory.Heavy,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 40,
        cost: 30,
        armorClass: { base: 14, addDex: false, maxDex: null },
    },
    ChainMail: {
        category: ArmorCategory.Heavy,
        strengthNeeded: 13,
        stealthDisadvantage: true,
        weight: 55,
        cost: 75,
        armorClass: { base: 16, addDex: false, maxDex: null },
    },
    Splint: {
        category: ArmorCategory.Heavy,
        strengthNeeded: 15,
        stealthDisadvantage: true,
        weight: 60,
        cost: 200,
        armorClass: { base: 17, addDex: false, maxDex: null },
    },
    Plate: {
        category: ArmorCategory.Heavy,
        strengthNeeded: 15,
        stealthDisadvantage: true,
        weight: 65,
        cost: 1500,
        armorClass: { base: 18, addDex: false, maxDex: null },
    },
    Shield: {
        category: ArmorCategory.Shield,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 6,
        cost: 10,
        armorClass: { base: 2, addDex: false, maxDex: null },
    },
};

// Add EquipmentCategory.Tools to all tools.
Object.keys(Armor).forEach(key => Armor[key].EquipmentCategory = EquipmentCategory.Armor);

export const AllArmor: ArmorObject[] = Object.keys(Armor).map(key => Armor[key]);
export const LightArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Light);
export const MediumArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Medium);
export const HeavyArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Heavy);
export const Shields: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Shield);
