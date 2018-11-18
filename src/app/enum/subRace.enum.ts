import { AbilityEnum, Ability } from "./ability.enum";
import { Size } from "./size.enum";
import { LanguageObject, Language } from "./language.enum";
import { Build } from "../models/build.model";
import { EquipmentObject } from "./equipment/equipment.enum";
import { TraitObject, Trait } from "./trait.enum";
import { settings, BuildAffectingObject } from "../models/common";
import { Equipment } from "./equipment/equipment";
import { Spell } from "./spell.enum";
import { HeavyArmor, MediumArmor } from "./equipment/armor.enum";

export enum SubRaceEnum {
    DarkElf = "DarkElf",
    HighElf = "HighElf",
    WoodElf = "WoodElf",
    LightfootHalfling = "LightfootHalfling",
    StoutHalfling = "StoutHalfling",
    HillDwarf = "HillDwarf",
    MountainDwarf = "MountainDwarf",
}

/**
 * effects are dynamic settings that modify a build e.g. a spell that gives a character darkvision
 * calls to build properties are hijacked by getters that run through all effects tied to a build (spells, backgrounds, equipment)
 * these effects change a copy of the build and return the desired stat. 
 */

export class SubRaceObject implements BuildAffectingObject {
    abilityModifier: { [ability in AbilityEnum]: number };
    equipmentProficiency?: settings<EquipmentObject>;
    languages?: settings<LanguageObject>;
    traits?: settings<TraitObject>;
    description: string;

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

export const SubRace: { [key in SubRaceEnum]: SubRaceObject } = {
    DarkElf: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 1 },
        equipmentProficiency: { inherent: [Equipment.Rapier, Equipment.Shortsword, Equipment.CrossbowHand], selectable: null },
        traits: { inherent: [Trait.SuperiorDarkvision, Trait.SunlightSensitivity, Trait.DrowMagic], selectable: null },
        description: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly through your native forrests.",
        effect: SubRaceObject.prototype.effect,
    },
    HighElf: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 1, Wisdom: 0, Charisma: 0 },
        equipmentProficiency: { inherent: [Equipment.Longsword, Equipment.Shortsword, Equipment.Shortbow, Equipment.Longbow], selectable: null },
        languages: { inherent: null, selectable: [{ num: 1, options: [Language.Dwarvish, Language.Giant, Language.Gnomish, Language.Goblin, Language.Halfling, Language.Orc, Language.Abyssal, Language.Celestial, Language.Draconic, Language.DeepSpeech, Language.Infernal, Language.Primordial, Language.Sylvan, Language.Undercommon] }] },
        traits: { inherent: [], selectable: [{ num: 1, options: [Spell.Light, Spell.MageHand, Spell.Mending, Spell.Message, Spell.MinorIllusion, Spell.AcidSplash, Spell.Prestidigitation, Spell.RayOfFrost, Spell.ShockingGrasp, Spell.TrueStrike, Spell.ChillTouch, Spell.DancingLights] }] },
        description: "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.",
        effect: SubRaceObject.prototype.effect,
    },
    WoodElf: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 1, Charisma: 0 },
        equipmentProficiency: { inherent: [Equipment.Longsword, Equipment.Shortsword, Equipment.Shortbow, Equipment.Longbow], selectable: null },
        traits: { inherent: [Trait.FleetOfFoot, Trait.MaskOfTheWild], selectable: null },
        description: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly through your native forests.",
        effect: SubRaceObject.prototype.effect,
    },
    LightfootHalfling: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 1 },
        traits: { inherent: [Trait.NaturallyStealthy], selectable: null },
        description: "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.",
        effect: SubRaceObject.prototype.effect,
    },
    StoutHalfling: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 1, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        traits: { inherent: [Trait.StoutResilience], selectable: null },
        description: "As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.",
        effect: SubRaceObject.prototype.effect,
    },
    HillDwarf: {
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 1, Charisma: 0 },
        traits: { inherent: [Trait.DwarvenToughness], selectable: null },
        description: "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
        effect: SubRaceObject.prototype.effect,
    },
    MountainDwarf: {
        abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        equipmentProficiency: { inherent: [ ...MediumArmor, ...HeavyArmor ], selectable: null },
        description: "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration.",
        effect: SubRaceObject.prototype.effect,
    },
}
