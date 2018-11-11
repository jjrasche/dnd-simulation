import { AbilityEnum } from "./ability.enum";
import { Size } from "./size.enum";
import { LanguageEnum, LanguageObject, Language } from "./language.enum";
import { Build } from "../models/build.model";
import { EquipmentObject, Equipment } from "./equipment/equipment.enum";
import { Skill, SkillObject } from "./skill.enum";

export enum RaceEnum {
    Dwarf = "Dwarf",
    Elf = "Elf",
    Halfling = "Halfling",
    Human = "Human",
    Dragonborn = "Dragonborn",
    Gnome = "Gnome",
    HalfElf = "HalfElf",
    HalfOrc = "HalfOrc",
    Tiefling = "Tiefling",
}

/**
 * effects are dynamic settings that modify a build e.g. a spell that gives a character darkvision
 * calls to build properties are hijacked by getters that run through all effects tied to a build (spells, backgrounds, equipment)
 * these effects change a copy of the build and return the desired stat. 
 */
export type effect = (n: Build) => Build;

export class RaceObject {
    abilityModifier: { [ability in AbilityEnum] : number };
    size: Size;
    equipmentProficiency: settings<EquipmentObject>;
    skillProficiency: settings<SkillObject>;
    languages: settings<LanguageObject>;
    speed: number;
    // trait: effect;
}

interface settings<T> {
    inherint: Array<T>;
    selectable: optionalSettings<T>[];
}

interface optionalSettings<T> {
    options: Array<T>;
    num: number;
}

export const Race: { [key in RaceEnum]: RaceObject } = {
    Dwarf: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 2, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: {
            inherint: [Equipment.Battleaxe, Equipment.Handaxe, Equipment.LightHammer, Equipment.Warhammer],
            selectable: [{ num: 1, options: [Equipment.SmithTools, Equipment.BrewerSupplies, Equipment.MasonTools] }]
        },
        skillProficiency: null,
        languages: { inherint: [Language.Common, Language.Dwarvish], selectable: null },
    },
    Elf: {
        abilityModifier: { Strength: 0, Dexterity: 2, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: { inherint: [Skill.Perception], selectable: null },
        languages: { inherint: [Language.Common, Language.Elvish], selectable: null },

    },
    Halfling: {
        abilityModifier: { Strength: 0, Dexterity: 2, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Small,
        speed: 25,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherint: [Language.Common, Language.Halfling], selectable: null },
    },
    Human: {
        abilityModifier: { Strength: 1, Dexterity: 1, Constitution: 1, Intelligence: 1, Wisdom: 1, Charisma: 1 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: {
            inherint: [Language.Common],
            selectable: [{ num: 1, options: [Language.Abyssal, Language.Celestial, Language.DeepSpeech, Language.Draconic, Language.Dwarvish, Language.Elvish, Language.Giant, Language.Gnomish, Language.Goblin, Language.Halfling, Language.Infernal, Language.Orc, Language.Primordial, Language.Sylvan, Language.Undercommon] }]
        },
    },
    Dragonborn: {
        abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 1 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherint: [Language.Common, Language.Draconic], selectable: null },
    },
    Gnome: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 2, Wisdom: 0, Charisma: 0 },
        size: Size.Small,
        speed: 25,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherint: [Language.Common, Language.Gnomish], selectable: null },
    },
    HalfElf: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 2 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: {
            inherint: [Language.Common, , Language.Elvish,],
            selectable: [{ num: 1, options: [Language.Abyssal, Language.Celestial, Language.DeepSpeech, Language.Draconic, Language.Dwarvish, Language.Giant, Language.Gnomish, Language.Goblin, Language.Halfling, Language.Infernal, Language.Orc, Language.Primordial, Language.Sylvan, Language.Undercommon] }]
        },
    },
    HalfOrc: {
        abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 1, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: { inherint: [Skill.Intimidation], selectable: null },
        languages: { inherint: [Language.Common, Language.Orc], selectable: null },
    },
    Tiefling: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 1, Wisdom: 0, Charisma: 2 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherint: [Language.Common, Language.Infernal], selectable: null },
    },


}
