import { BuildAffectingObject, applyToBuildFromObject } from "./build.object";
import { SubRaceObject, SubRace } from "./subRace.model";
import { AbilityEnum } from "../enum/ability.enum";
import { Size } from "../enum/size.enum";
import { settings } from "./setting.model";
import { EquipmentObject } from "./equipment/equipment.model";
import { SkillObject, Skill } from "./skill.model";
import { LanguageObject, Language } from "./language.model";
import { TraitObject, Trait } from "./trait.model";
import { Build } from "./build.model";
import { RaceEnum } from "../enum/race.enum";
import { Equipment } from "./equipment/equipment.data";

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
        applyToBuildFromObject(() => this.abilityModifier, (k, a) => b.ability[k] += a[k])
        this.traits.forEach(trait => trait.effect(b));
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
