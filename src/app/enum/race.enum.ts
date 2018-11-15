import { AbilityEnum, Ability } from "./ability.enum";
import { Size } from "./size.enum";
import { LanguageObject, Language } from "./language.enum";
import { Build } from "../models/build.model";
import { EquipmentObject } from "./equipment/equipment.enum";
import { Skill, SkillObject } from "./skill.enum";
import { TraitObject, Trait } from "./trait.enum";
import { settings, BuildAffectingObject } from "../models/common";
import { Equipment } from "./equipment/equipment";
import { SubRaceObject, SubRace } from "./subRace.enum";

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

export class RaceObject implements BuildAffectingObject {
    subRaces?: SubRaceObject[];
    abilityModifier: { [ability in AbilityEnum]: number };
    size: Size;
    equipmentProficiency: settings<EquipmentObject>;
    skillProficiency: settings<SkillObject>;
    languages: settings<LanguageObject>;
    speed: number;
    traits: TraitObject[] = [];

    // default effect without any alteration
    effect(b: Build): void {
        // apply racial effect to ability modifiers
        if (b.ability != null && this.abilityModifier != null) {
            Object.keys(Ability).forEach(key => b.ability[key] += this.abilityModifier[key]);
        }
        // apply traits

        // apply speed
    };
}

export const Race: { [key in RaceEnum]: RaceObject } = {
    Dwarf: {
        subRaces: [SubRace.HillDwarf, SubRace.MountainDwarf ],
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 2, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: {
            inherent: [Equipment.Battleaxe, Equipment.Handaxe, Equipment.LightHammer, Equipment.Warhammer],
            selectable: [{ num: 1, options: [Equipment.SmithTools, Equipment.BrewerSupplies, Equipment.MasonTools] }]
        },
        skillProficiency: null,
        languages: { inherent: [Language.Common, Language.Dwarvish], selectable: null },
        traits: [Trait.Darkvision, Trait.DwarvenResilience, Trait.Stonecunning],
        effect: RaceObject.prototype.effect,
    },
    Elf: {
        subRaces: [SubRace.WoodElf, SubRace.HighElf, SubRace.DarkElf],
        abilityModifier: { Strength: 0, Dexterity: 2, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: { inherent: [Skill.Perception], selectable: null },
        languages: { inherent: [Language.Common, Language.Elvish], selectable: null },
        traits: [Trait.Darkvision, Trait.FeyAncestry, Trait.Trance],
        effect: RaceObject.prototype.effect,
    },
    Halfling: {
        subRaces: [SubRace.LightfootHalfling, SubRace.StoutHalfling ],
        abilityModifier: { Strength: 0, Dexterity: 2, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Small,
        speed: 25,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherent: [Language.Common, Language.Halfling], selectable: null },
        traits: [Trait.Brave, Trait.HalflingNimbleness, Trait.Lucky],
        effect: RaceObject.prototype.effect,

    },
    Human: {
        abilityModifier: { Strength: 1, Dexterity: 1, Constitution: 1, Intelligence: 1, Wisdom: 1, Charisma: 1 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: {
            inherent: [Language.Common],
            selectable: [{ num: 1, options: [Language.Abyssal, Language.Celestial, Language.DeepSpeech, Language.Draconic, Language.Dwarvish, Language.Elvish, Language.Giant, Language.Gnomish, Language.Goblin, Language.Halfling, Language.Infernal, Language.Orc, Language.Primordial, Language.Sylvan, Language.Undercommon] }]
        },
        traits: [],
        effect: RaceObject.prototype.effect,
    },
    Dragonborn: {
        abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 1 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherent: [Language.Common, Language.Draconic], selectable: null },
        traits: [Trait.DraconicAncestry, Trait.BreathWeapon, Trait.DamageResistance],
        effect: RaceObject.prototype.effect,
    },
    Gnome: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 2, Wisdom: 0, Charisma: 0 },
        size: Size.Small,
        speed: 25,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherent: [Language.Common, Language.Gnomish], selectable: null },
        traits: [Trait.Darkvision, Trait.GnomeCunning],
        effect: RaceObject.prototype.effect,
    },
    HalfElf: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 2 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: {
            inherent: [Language.Common, , Language.Elvish,],
            selectable: [{ num: 1, options: [Language.Abyssal, Language.Celestial, Language.DeepSpeech, Language.Draconic, Language.Dwarvish, Language.Giant, Language.Gnomish, Language.Goblin, Language.Halfling, Language.Infernal, Language.Orc, Language.Primordial, Language.Sylvan, Language.Undercommon] }]
        },
        traits: [Trait.Darkvision, Trait.FeyAncestry, Trait.SkillVersatility],
        effect: RaceObject.prototype.effect,
    },
    HalfOrc: {
        abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 1, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: { inherent: [Skill.Intimidation], selectable: null },
        languages: { inherent: [Language.Common, Language.Orc], selectable: null },
        traits: [Trait.Darkvision, Trait.SavageAttacks, Trait.RelentlessEndurance],
        effect: RaceObject.prototype.effect,

    },
    Tiefling: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 1, Wisdom: 0, Charisma: 2 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherent: [Language.Common, Language.Infernal], selectable: null },
        traits: [Trait.Darkvision, Trait.HellishResistance, Trait.InfernalLegacy],
        effect: RaceObject.prototype.effect,
    },
}
