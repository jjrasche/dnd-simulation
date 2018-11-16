import { Skill, SkillObject } from "./skill.enum";
import { settings, BuildAffectingObject } from "../models/common";
import { AbilityObject, Ability } from "./ability.enum";
import { Build } from "../models/build.model";
import { EquipmentObject } from "./equipment/equipment.enum";
import { Equipment } from "./equipment/equipment";
import { Armor, LightArmor, MediumArmor, Shields, AllArmor, ArmorObject } from "./equipment/armor.enum";
import { SimpleWeapons, MartialWeapons, AllWeapons, WeaponObject } from "./equipment/weapon.enum";
import { Die } from "./die.enum";

// Limits the possible Classes to the ones listed below and allows for type safety.
export enum ClassEnum {
    Barbarian = "Barbarian",
    Bard = "Bard",
    Cleric = "Cleric",
    Druid = "Druid",
    Fighter = "Fighter",
    Monk = "Monk",
    Paladin = "Paladin",
    Ranger = "Ranger",
    Rogue = "Rogue",
    Sorcerer = "Sorcerer",
    Warlock = "Warlock",
    Wizard = "Wizard"
};

// Enforces form of return object from so you can do `Class.Bard.numSkills`
export class ClassObject implements BuildAffectingObject {
    skill: settings<SkillObject>;
    savingThrows: AbilityObject[];
    equipmentProficiency: settings<EquipmentObject>;
    hitDie: Die;
    startingEquipment: settings<EquipmentObject>;

    // default effect without any alteration
    effect(b: Build): void {
        // apply skills
        if (this.savingThrows) {
            Object.keys(Ability).forEach(key => b.savingThrow[key] = this.savingThrows[key]);
        }
        // apply saving throws
        if (this.skill) {
            Object.keys(Skill).forEach(key => b.skill[key] = this.skill[key]);
        }
    };
};

/**
 * Stores object data b/c Enum can't store objects directly.
 * Limits usage of Classes to only those specified in ClassEnum.
 * Class.Bard (good) Class.Fairy (fails)
 */
export const Class: { [key in ClassEnum]: ClassObject } = {
    Barbarian: {
        skill: { inherent: null, selectable: [{ num: 2, options: [Skill.AnimalHandling, Skill.Athletics, Skill.Intimidation, Skill.Nature, Skill.Perception, Skill.Survival] }] },
        savingThrows: [Ability.Strength, Ability.Constitution],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...LightArmor,
                ...MediumArmor,
                ...Shields,
                ...AllWeapons,
            ],
            selectable: null
        },
        hitDie: Die.D12,
        startingEquipment: { 
            inherent: [ Equipment.ExplorerPack, { quantity: 4, ...Equipment.Javelin } as WeaponObject ], selectable: null },
    },
    Bard: {
        skill: { inherent: null, selectable: [{ num: 3, options: [Skill.Athletics, Skill.Acrobatics, Skill.SleightOfHand, Skill.Stealth, Skill.Arcana, Skill.History, Skill.Investigation, Skill.Nature, Skill.Religion, Skill.AnimalHandling, Skill.Insight, Skill.Medicine, Skill.Perception, Skill.Survival, Skill.Deception, Skill.Intimidation, Skill.Performance, Skill.Persuasion] }] },
        savingThrows: [Ability.Dexterity, Ability.Charisma],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...LightArmor,
                ...SimpleWeapons,
                Equipment.Longsword,
                Equipment.Rapier,
                Equipment.Shortsword,
                Equipment.CrossbowHand,
            ],
            selectable: null
        },
        hitDie: Die.D8,
        startingEquipment: { inherent: [ Equipment.Leather, Equipment.Dagger ], selectable: null },
    },
    Cleric: {
        skill: { inherent: null, selectable: [{ num: 2, options: [Skill.History, Skill.Insight, Skill.Medicine, Skill.Persuasion, Skill.Religion] }] },
        savingThrows: [Ability.Wisdom, Ability.Charisma],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...LightArmor,
                ...MediumArmor,
                ...Shields,
                ...SimpleWeapons,
            ],
            selectable: null
        },
        hitDie: Die.D8,
        startingEquipment: { inherent: [ Equipment.Shield ], selectable: null },
    },
    Druid: {
        skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Acrobatics, Skill.AnimalHandling, Skill.Athletics, Skill.History, Skill.Insight, Skill.Intimidation, Skill.Perception, Skill.Survival] }] },
        savingThrows: [Ability.Intelligence, Ability.Wisdom],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...LightArmor,
                ...MediumArmor,
                ...Shields,
                Equipment.Club,
                Equipment.Dagger,
                Equipment.Javelin,
                Equipment.Mace,
                Equipment.Quarterstaff,
                Equipment.Sickle,
                Equipment.Spear,
                Equipment.Dart,
                Equipment.Sling,
                Equipment.Scimitar,
                Equipment.HerbalismKit,
            ],
            selectable: null
        },
        hitDie: Die.D8,
        startingEquipment: { inherent: [ Equipment.Leather, Equipment.ExplorerPack ], selectable: null },
    },
    Fighter: {
        skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Acrobatics, Skill.Athletics, Skill.History, Skill.Insight, Skill.Religion, Skill.Stealth] }] },
        savingThrows: [Ability.Strength, Ability.Constitution],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...AllArmor,
                ...AllWeapons,
                ...Shields,
            ],
            selectable: null
        },
        hitDie: Die.D10,
        startingEquipment: { inherent: null, selectable: null },
    },
    Monk: {
        skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Acrobatics, Skill.Athletics, Skill.History, Skill.Insight, Skill.Religion, Skill.Stealth] }] },
        savingThrows: [Ability.Strength, Ability.Dexterity],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...SimpleWeapons,
                Equipment.Shortsword,
            ],
            selectable: null
        },
        hitDie: Die.D8,
        startingEquipment: { inherent: [ { quantity: 10, ...Equipment.Dart } as WeaponObject ], selectable: null },
    },
    Paladin: {
        skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Athletics, Skill.Insight, Skill.Intimidation, Skill.Medicine, Skill.Persuasion, Skill.Religion] }] },
        savingThrows: [Ability.Wisdom, Ability.Charisma],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...AllArmor,
                ...AllWeapons,
                ...Shields,
            ],
            selectable: null
        },
        hitDie: Die.D10,
        startingEquipment: { inherent: [ Equipment.ChainMail ], selectable: null },
    },
    Ranger: {
        skill: { inherent: null, selectable: [{ num: 3, options: [Skill.AnimalHandling, Skill.Athletics, Skill.Insight, Skill.Investigation, Skill.Nature, Skill.Perception, Skill.Stealth, Skill.Survival] }] },
        savingThrows: [Ability.Strength, Ability.Dexterity],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...LightArmor,
                ...MediumArmor,
                ...AllWeapons,
                ...Shields,
            ],
            selectable: null
        },
        hitDie: Die.D10,
        startingEquipment: { inherent: [ Equipment.Longbow, { quantity: 20, ...Equipment.Arrow } as WeaponObject ], selectable: null },
    },
    Rogue: {
        skill: { inherent: null, selectable: [{ num: 4, options: [Skill.Acrobatics, Skill.Athletics, Skill.Deception, Skill.Insight, Skill.Intimidation, Skill.Investigation, Skill.Perception, Skill.Performance, Skill.Persuasion, Skill.SleightOfHand, Skill.Stealth] }] },
        savingThrows: [Ability.Dexterity, Ability.Intelligence],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...LightArmor,
                ...SimpleWeapons,
                Equipment.Longsword,
                Equipment.Rapier,
                Equipment.Shortsword,
                Equipment.CrossbowHand,
                Equipment.ThievesTools,
            ],
            selectable: null
        },
        hitDie: Die.D8,
        startingEquipment: { inherent: [Equipment.Leather, { quantity: 2, ...Equipment.Dagger } as WeaponObject, Equipment.ThievesTools ], selectable: null },
    },
    Sorcerer: {
        skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Arcana, Skill.Deception, Skill.Insight, Skill.Intimidation, Skill.Persuasion, Skill.Religion] }] },
        savingThrows: [Ability.Constitution, Ability.Charisma],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                Equipment.Dagger,
                Equipment.Quarterstaff,
                Equipment.Dart,
                Equipment.Sling,
            ],
            selectable: null
        },
        hitDie: Die.D6,
        startingEquipment: { inherent: [ { quantity: 2, ...Equipment.Dagger } as WeaponObject ], selectable: null },
    },
    Warlock: {
        skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Arcana, Skill.Deception, Skill.History, Skill.Intimidation, Skill.Investigation, Skill.Nature, Skill.Religion] }] },
        savingThrows: [Ability.Wisdom, Ability.Charisma],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                ...LightArmor,
                ...SimpleWeapons,
            ],
            selectable: null
        },
        hitDie: Die.D8,
        startingEquipment: { inherent: [{ quantity: 2, ...Equipment.Dagger } as WeaponObject, Equipment.Leather ], selectable: null },
    },
    Wizard: {
        skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Arcana, Skill.History, Skill.Insight, Skill.Investigation, Skill.Medicine, Skill.Religion] }] },
        savingThrows: [Ability.Intelligence, Ability.Wisdom],
        effect: ClassObject.prototype.effect,
        equipmentProficiency: {
            inherent: [
                Equipment.Dagger,
                Equipment.Quarterstaff,
                Equipment.Dart,
                Equipment.Sling,
            ],
            selectable: null
        },
        hitDie: Die.D6,
        startingEquipment: { inherent: [ Equipment.Spellbook ], selectable: null },
    },
};