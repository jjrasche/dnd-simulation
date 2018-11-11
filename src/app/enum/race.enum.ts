import { AbilityEnum } from "./ability.enum";
import { Size } from "./size.enum";
import { LanguageEnum, LanguageObject } from "./language.enum";
import { Build } from "../models/build.model";
import { EquipmentObject } from "./equipment/equipment.enum";
import { Skill } from "./skill.enum";

export enum RaceEnum {
    // Dwarf = "Dwarf",
    // Elf = "Elf",
    Halfling = "Halfling",
    Human = "Human",
    Dragonborn = "Dragonborn",
    Gnome = "Gnome",
    HalfElf = "HalfElf",
    // HalfOrc = "HalfOrc",
    Tiefling = "Tiefling",
}

type effect = (n: Build) => Build;

export class RaceObject {
    abilityModifier: { [ability in AbilityEnum] : number };
    size: Size;
    equipmentProficiencies: EquipmentObject[];
    numEquipmentProficiencyChoices: number;
    equipmentProficiencyOptions: EquipmentObject[];
    // languages: LanguageObject[];
    // languageOption: LanguageObject[];
    // numLanguageChoices: number;
    // speed: number;
    // darkVision: number
    // trait: effect;
}

export const Race: { [key in RaceEnum]: RaceObject } = {
    // Dwarf: {
    //     abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 2, Intelligence: 0, Wisdom: 0, Charisma: 0 },
    //     size: Size.Medium,
    //     equipmentProficiencies: [EquipmentObject.Battleaxes, EquipmentObject.Handaxes, EquipmentObject.LightHammers, EquipmentObject.Warhammers],
    //     numEquipmentProficiencyChoices: 1,
    //     equipmentProficiencyOptions: [EquipmentObject.SmithTools, EquipmentObject.BrewerSupplies, EquipmentObject.MasonTools],
    // },
    // Elf: {
    //     abilityModifier: { Strength: 0, Dexterity: 2, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
    //     size: Size.Medium,
    //     equipmentProficiencies: [Skill.Perception],
    //     numEquipmentProficiencyChoices: 0,
    //     equipmentProficiencyOptions: [],
    // },
    Halfling: {
        abilityModifier: { Strength: 0, Dexterity: 2, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Small,
        equipmentProficiencies: [],
        numEquipmentProficiencyChoices: 0,
        equipmentProficiencyOptions: [],
    },
    Human: {
        abilityModifier: { Strength: 1, Dexterity: 1, Constitution: 1, Intelligence: 1, Wisdom: 1, Charisma: 1 },
        size: Size.Medium,
        equipmentProficiencies: [],
        numEquipmentProficiencyChoices: 0,
        equipmentProficiencyOptions: [],
    },
    Dragonborn: {
        abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 1 },
        size: Size.Medium,
        equipmentProficiencies: [],
        numEquipmentProficiencyChoices: 0,
        equipmentProficiencyOptions: [],
    },
    Gnome: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 2, Wisdom: 0, Charisma: 0 },
        size: Size.Small,
        equipmentProficiencies: [],
        numEquipmentProficiencyChoices: 0,
        equipmentProficiencyOptions: [],
    },
    HalfElf: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 2 },
        size: Size.Medium,
        equipmentProficiencies: [],
        numEquipmentProficiencyChoices: 0,
        equipmentProficiencyOptions: [],
    },
    // HalfOrc: {
    //     abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 1, Intelligence: 0, Wisdom: 0, Charisma: 0 },
    //     size: Size.Medium,
    //     equipmentProficiencies: [Skill.Intimidation],
    //     numEquipmentProficiencyChoices: 0,
    //     equipmentProficiencyOptions: [],
    // },
    Tiefling: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 1, Wisdom: 0, Charisma: 2 },
        size: Size.Medium,
        equipmentProficiencies: [],
        numEquipmentProficiencyChoices: 0,
        equipmentProficiencyOptions: [],
    },

}
