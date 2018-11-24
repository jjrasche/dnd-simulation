import { BaseBuildAffectingEquipmentConstructor, BaseBuildAffectingEquipmentObject } from "./equipment.model";
import { Build } from "src/app/models/build.model";
import { ArmorEnum } from "src/app/enum/equipment/armor.enum";
import { BuildEffect, BuildEffectOperation } from "../build.object";
import { ArmorCategory } from "src/app/enum/equipment/armor-category.enum";
import { Ability } from "../ability.model";

/**
 * For instances where armor sets base from the default.
 * 
 * @param base the new base armor class.
 * @param addDex whether this armor allows adding dex.
 * @param maxDex the limit on how much dex can be added to AC.
 */
export class OverWriteEffect {
    base: number;
    addDex: boolean;
    maxDex: number;
    constructor(obj: OverWriteEffect) {
        this.base = obj.base;
        this.addDex = obj.addDex;
        this.maxDex = obj.maxDex;
    }
}

/**
 * For instances armor simply adds to current AC.
 */
export class AdditiveEffect {
    add: number;
    constructor(obj: AdditiveEffect) {
        this.add = obj.add;
    }
}

type ArmorEffect = OverWriteEffect | AdditiveEffect;


interface IArmorObject {
    category: ArmorCategory;
    strengthNeeded: number;
    stealthDisadvantage: boolean;
    armorEffect: ArmorEffect;
}
type ArmorConstructor = IArmorObject & BaseBuildAffectingEquipmentConstructor;

export class ArmorObject extends BaseBuildAffectingEquipmentObject {
    category: ArmorCategory;
    strengthNeeded: number;
    stealthDisadvantage: boolean;
    armorEffect: ArmorEffect;

    constructor(obj: ArmorConstructor) {
        super(obj);
        this.category = obj.category;
        this.strengthNeeded = obj.strengthNeeded;
        this.stealthDisadvantage = obj.stealthDisadvantage;
        this.armorEffect = obj.armorEffect;

        // how to ensure dex is retreived after all effects. 
        /**
         * this is a generically hard problem for a rule engine to solve. Circular dependencies.
         * 
         * could use unapplied modifications 
         * stop processing command within effect
         */

        // proficiency check if not dex/str checks, throws, attacks have disadvantage, prevent spell casting actions
        if (this.armorEffect instanceof OverWriteEffect) {
                let effect = this.armorEffect as OverWriteEffect;
                        let dexEffect = effect.addDex ? b.getAbilityModifier(Ability.Dexterity) : 0;
                        dexEffect = effect.maxDex && dexEffect > effect.maxDex ? effect.maxDex : dexEffect;
            this.mod.push(
                new BuildEffect({
                    name: "armor",
                    modifyingProperty: "armorClass", 
                    dependentProperties: ["abilityMod.Dexterity"],
                    operation: BuildEffectOperation.Initialize,
                    /**
                     * TODO: need to find a way around using functions... 
                     * maybe declare both the build propety you change and the build properties you need
                     * the runner will attempt to run all independent variables before dependent ones
                     * will make it easier to detect loops
                     */
                    // value: (b: Build) => {

                    //     let ac = effect.base + dexEffect;
                    //     b.armorClass += ac;
                    // },
                    value: 
                })
            );
        } else if (this.armorEffect instanceof AdditiveEffect) {
            this.mod.push(new BuildEffect({
                name: "armor",
                modifyingProperty: "armorClass",
                operation: BuildEffectOperation.Add,
                value: (this.armorEffect as AdditiveEffect).add
            }));
        }


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
        armorEffect: new OverWriteEffect({ base: 11, addDex: true, maxDex: null }),
    }),
    Leather: new ArmorObject({
        description: "",
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 10,
        cost: 10,
        armorEffect: new OverWriteEffect({ base: 11, addDex: true, maxDex: null }),
    }),
    StuddedLeather: new ArmorObject({
        description: "",
        category: ArmorCategory.Light,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 13,
        cost: 45,
        armorEffect: new OverWriteEffect({ base: 12, addDex: true, maxDex: null }),
    }),
    Hide: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 12,
        cost: 10,
        armorEffect: new OverWriteEffect({ base: 12, addDex: true, maxDex: 2 }),
    }),
    ChainShirt: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 20,
        cost: 50,
        armorEffect: new OverWriteEffect({ base: 13, addDex: true, maxDex: 2 }),
    }),
    ScaleMail: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 45,
        cost: 50,
        armorEffect: new OverWriteEffect({ base: 14, addDex: true, maxDex: 2 }),
    }),
    Breastplate: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 20,
        cost: 400,
        armorEffect: new OverWriteEffect({ base: 14, addDex: true, maxDex: 2 }),
    }),
    HalfPlate: new ArmorObject({
        description: "",
        category: ArmorCategory.Medium,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 40,
        cost: 750,
        armorEffect: new OverWriteEffect({ base: 15, addDex: true, maxDex: 2 }),
    }),
    RingMail: new ArmorObject({
        description: "",
        category: ArmorCategory.Heavy,
        strengthNeeded: 0,
        stealthDisadvantage: true,
        weight: 40,
        cost: 30,
        armorEffect: new OverWriteEffect({ base: 14, addDex: false, maxDex: null }),
    }),
    ChainMail: new ArmorObject({
        description: "",
        category: ArmorCategory.Heavy,
        strengthNeeded: 13,
        stealthDisadvantage: true,
        weight: 55,
        cost: 75,
        armorEffect: new OverWriteEffect({ base: 16, addDex: false, maxDex: null }),
    }),
    Splint: new ArmorObject({
        description: "",
        category: ArmorCategory.Heavy,
        strengthNeeded: 15,
        stealthDisadvantage: true,
        weight: 60,
        cost: 200,
        armorEffect: new OverWriteEffect({ base: 17, addDex: false, maxDex: null }),
    }),
    Plate: new ArmorObject({
        description: "",
        category: ArmorCategory.Heavy,
        strengthNeeded: 15,
        stealthDisadvantage: true,
        weight: 65,
        cost: 1500,
        armorEffect: new OverWriteEffect({ base: 18, addDex: false, maxDex: null }),
    }),
    Shield: new ArmorObject({
        description: "",
        category: ArmorCategory.Shield,
        strengthNeeded: 0,
        stealthDisadvantage: false,
        weight: 6,
        cost: 10,
        armorEffect: new AdditiveEffect({add: 2}),
    }),
};

export const AllArmor: ArmorObject[] = Object.keys(Armor).map(key => Armor[key]);
export const LightArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Light);
export const MediumArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Medium);
export const HeavyArmor: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Heavy);
export const Shields: ArmorObject[] = AllArmor.filter(armor => armor.category == ArmorCategory.Shield);
