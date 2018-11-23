import { BaseBuildAffectingEquipmentConstructor, BaseBuildAffectingEquipmentObject } from "./equipment.model";
import { Build } from "src/app/models/build.model";
import { ArmorEnum } from "src/app/enum/equipment/armor.enum";
import { BuildEffect } from "../build.object";
import { ArmorCategory } from "src/app/enum/equipment/armor-category.enum";

export interface ArmorClassObject {
    base: number;
    addDex: boolean;
    maxDex: number;
}

interface IArmorObject {
    category: ArmorCategory;
    strengthNeeded: number;
    stealthDisadvantage: boolean;
    armorClass: ArmorClassObject;
}
type ArmorConstructor = IArmorObject & BaseBuildAffectingEquipmentConstructor;

export class ArmorObject extends BaseBuildAffectingEquipmentObject {
    category: ArmorCategory;
    strengthNeeded: number;
    stealthDisadvantage: boolean;
    armorClass: ArmorClassObject;

    constructor(obj: ArmorConstructor) {
        super(obj);
        this.category = obj.category;
        this.strengthNeeded = obj.strengthNeeded;
        this.stealthDisadvantage = obj.stealthDisadvantage;
        this.armorClass = obj.armorClass;

        // proficiency check if not dex/str checks, throws, attacks have disadvantage, prevent spell casting actions
        this.mod.push(new BuildEffect("armor", "armorClass", (b: Build) => {
            // how to ensure dex is retreived after all effects. 
            /**
             * this is a generically hard problem for a rule engine to solve. Circular dependencies.
             * 
             * could use unapplied modifications 
             * stop processing command within effect
             */
            let armorEffect = (this.armorClass.base - 10);
            let dexEffect = this.armorClass.addDex ? b.ability.Dexterity : 0;
            dexEffect = this.armorClass.maxDex && dexEffect > this.armorClass.maxDex ? this.armorClass.maxDex : dexEffect;
            
            b.armorClass += armorEffect + dexEffect;
        }));

    }
};

export type ArmorMapType = { [key in ArmorEnum]: ArmorObject };
export const Armor: ArmorMapType = {
    Padded: new ArmorObject({
        description: "",
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 8,
        cost: 5,
        armorClass: { base: 11, addDex: true, maxDex: null },
    }),
    Leather: new ArmorObject({
        description: "",
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 10,
        cost: 10,
        armorClass: { base: 11, addDex: true, maxDex: null },
    }),
    StuddedLeather: new ArmorObject({
        description: "",
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 13,
        cost: 45,
        armorClass: { base: 12, addDex: true, maxDex: null },
    }),
    Hide: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 12,
        cost: 10,
        armorClass: { base: 12, addDex: true, maxDex: 2 },
    }),
    ChainShirt: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 20,
        cost: 50,
        armorClass: { base: 13, addDex: true, maxDex: 2 },
    }),
    ScaleMail: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 45,
        cost: 50,
        armorClass: { base: 14, addDex: true, maxDex: 2 },
    }),
    Breastplate: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 20,
        cost: 400,
        armorClass: { base: 14, addDex: true, maxDex: 2 },
    }),
    HalfPlate: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 40,
        cost: 750,
        armorClass: { base: 15, addDex: true, maxDex: 2 },
    }),
    RingMail: new ArmorObject({
        description: "",
        category: ArmorCategory.Heavy,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 40,
        cost: 30,
        armorClass: { base: 14, addDex: false, maxDex: null },
    }),
    ChainMail: new ArmorObject({
        description: "",
        category: ArmorCategory.Heavy,
        strengthNeeded: 13,
        stealthDisadvantage: true,
        weight: 55,
        cost: 75,
        armorClass: { base: 16, addDex: false, maxDex: null },
    }),
    Splint: new ArmorObject({
        description: "",
        category: ArmorCategory.Heavy,
        strengthNeeded: 15,
        stealthDisadvantage: true,
        weight: 60,
        cost: 200,
        armorClass: { base: 17, addDex: false, maxDex: null },
    }),
    Plate: new ArmorObject({
        description: "",
        category: ArmorCategory.Heavy,
        strengthNeeded: 15,
        stealthDisadvantage: true,
        weight: 65,
        cost: 1500,
        armorClass: { base: 18, addDex: false, maxDex: null },
    }),
    Shield: new ArmorObject({
        description: "",
        category: ArmorCategory.Shield,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 6,
        cost: 10,
        armorClass: { base: 2, addDex: false, maxDex: null },
    }),
};

export const AllArmor: ArmorObject[] = Object.keys(Armor).map(key => Armor[key]);
export const LightArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Light);
export const MediumArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Medium);
export const HeavyArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Heavy);
export const Shields: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Shield);
