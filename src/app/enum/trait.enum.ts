import { Build } from "../models/build.model";
import { BuildAffectingObject } from "../models/common";

export enum TraitEnum {
    Darkvision = "Darkvision",
    DwarvenResilience = "DwarvenResilience",
    DwarvenCombatTraining = "DwarvenCombatTraining",
    Stonecunning = "Stonecunning",
    DwarvenToughness = "DwarvenToughness",
    KeenSenses = "KeenSenses",
    FeyAncestry = "FeyAncestry",
    Trance = "Trance",
    ElfWeaponTraining = "ElfWeaponTraining",
    HighElfCantrip = "HighElfCantrip",
    ExtraLanguage = "ExtraLanguage",
    Lucky = "Lucky",
    Brave = "Brave",
    HalflingNimbleness = "HalflingNimbleness",
    NaturallyStealthy = "NaturallyStealthy",
    DraconicAncestry = "DraconicAncestry",
    BreathWeapon = "BreathWeapon",
    DamageResistance = "DamageResistance",
    GnomeCunning = "GnomeCunning",
    ArtificersLore = "ArtificersLore",
    Tinker = "Tinker",
    SkillVersatility = "SkillVersatility",
    Menacing = "Menacing",
    RelentlessEndurance = "RelentlessEndurance",
    SavageAttacks = "SavageAttacks",
    HellishResistance = "HellishResistance",
    InfernalLegacy = "InfernalLegacy",
}

export class TraitObject implements BuildAffectingObject{
    description: string;

    effect(b: Build): void {
    };
}

export const Trait: { [key in TraitEnum]: TraitObject } = {
    Darkvision: {
        description: "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.",
        effect: TraitObject.prototype.effect,
    },
    DwarvenResilience: {
        description: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
        effect: TraitObject.prototype.effect,
    },
    DwarvenCombatTraining: {
        description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
        effect: TraitObject.prototype.effect,
    },
    Stonecunning: {
        description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
        effect: TraitObject.prototype.effect,
    },
    DwarvenToughness: {
        description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
        effect: TraitObject.prototype.effect,
    },
    KeenSenses: {
        description: "You have proficiency in the Perception skill.",
        effect: TraitObject.prototype.effect,
    },
    FeyAncestry: {
        description: "You have advantage on saving throws against being charmed, and magic cannot put you to sleep.",
        effect: TraitObject.prototype.effect,
    },
    Trance: {
        description: "Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \trance.\) While meditating, you can dream after a fasion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.",
        effect: TraitObject.prototype.effect,
    },
    ElfWeaponTraining: {
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
        effect: TraitObject.prototype.effect,
    },
    HighElfCantrip: {
        description: "You know one cantrip of your choice form the wizard spell list. Intelligence is your spellcasting ability for it.",
        effect: TraitObject.prototype.effect,
    },
    ExtraLanguage: {
        description: "You can speak, read, and write one extra language of your choice.",
        effect: TraitObject.prototype.effect,
    },
    Lucky: {
        description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
        effect: TraitObject.prototype.effect,
    },
    Brave: {
        description: "You have advantage on saving throw against being frghtened ",
        effect: TraitObject.prototype.effect,
    },
    HalflingNimbleness: {
        description: "You can move through the space of any creature that is of a size larger than yours.",
        effect: TraitObject.prototype.effect,
    },
    NaturallyStealthy: {
        description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
        effect: TraitObject.prototype.effect,
    },
    DraconicAncestry: {
        description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
        effect: TraitObject.prototype.effect,
    },
    BreathWeapon: {
        description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancesry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 2d6 at 6th level, 3d6 at 11th level, and 5d6 at 16th level.,After you use your breath weapon, you cannot use it again until you complete a short or long rest.",
        effect: TraitObject.prototype.effect,
    },
    DamageResistance: {
        description: "You have resistance to the damage type associated with your draconic ancestry.",
        effect: TraitObject.prototype.effect,
    },
    GnomeCunning: {
        description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
        effect: TraitObject.prototype.effect,
    },
    ArtificersLore: {
	description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technologoical devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
    effect: TraitObject.prototype.effect,
},
    Tinker: {
        description: "You have proficiency with artisans tools (tinkers tools). Using those tools ,you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The devices ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; t that time, you can reclaim the materils used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:,Clockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.,Fire Starter: The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.,Music Box: When opened, this music box plays a single song t a moderate volume. The box stops playing when it reaches the songs end or when it is closed.",
        effect: TraitObject.prototype.effect,
    },
    SkillVersatility: {
        description: "You gain proficiency in two skills of your choice.",
        effect: TraitObject.prototype.effect,
    },
    Menacing: {
        description: "You gain proficiency in the Intimidation skill.",
        effect: TraitObject.prototype.effect,
    },
    RelentlessEndurance: {
        description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. you cannot use this feature again until you finish a long rest.",
        effect: TraitObject.prototype.effect,
    },
    SavageAttacks: {
        description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapons damage dice one additional time and add it to the extra damge of the critical hit.",
        effect: TraitObject.prototype.effect,
    },
    HellishResistance: {
        description: "You have resistance to fire damage.",
        effect: TraitObject.prototype.effect,
    },
    InfernalLegacy: {
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5h level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
        effect: TraitObject.prototype.effect,
    }
}
