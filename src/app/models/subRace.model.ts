import { BaseBuildAffectingConstructor, BaseBuildAffectingObject, BuildEffect, applyToBuildFromObject } from "./build.object";
import { AbilityEnum } from "../enum/ability.enum";
import { settings } from "./setting.model";
import { EquipmentObject } from "./equipment/equipment.model";
import { LanguageObject, Language } from "./language.model";
import { TraitObject, Trait } from "./trait.model";
import { Build } from "./build.model";
import { SubRaceEnum } from "../enum/subRace.enum";
import { Equipment } from "./equipment/equipment.data";
import { Spell } from "./spell.model";
import { MediumArmor, HeavyArmor } from "./equipment/armor.model";

interface ISubRaceObject {
    abilityModifier: { [ability in AbilityEnum]: number };
    equipmentProficiency?: settings<EquipmentObject>;
    languages?: settings<LanguageObject>;
    traits?: settings<TraitObject>;
}
type SubRaceConstructor = ISubRaceObject & BaseBuildAffectingConstructor;

export class SubRaceObject extends BaseBuildAffectingObject {
    abilityModifier: { [ability in AbilityEnum]: number };
    equipmentProficiency?: settings<EquipmentObject>;
    languages?: settings<LanguageObject>;
    traits?: settings<TraitObject>;

    constructor(obj: SubRaceConstructor) {
        super(obj);
        this.abilityModifier = obj.abilityModifier;
        this.equipmentProficiency = obj.equipmentProficiency;
        this.languages = obj.languages;
        this.traits = obj.traits;

        this.mod.push(new BuildEffect({
            name: "subrace",
            property: "ability",
            effect: (b: Build) => applyToBuildFromObject(() => this.abilityModifier, (k, a) => b.ability[k] += a[k])
        }));

        if (this.traits) {
            this.traits.inherent.map((trait: TraitObject) => trait.mod)
                .forEach((effects: BuildEffect[]) => effects
                    .forEach((be: BuildEffect) => this.mod.push(be)));
        }
    }
}

export const SubRace: { [key in SubRaceEnum]: SubRaceObject } = {
    DarkElf: new SubRaceObject({
        description: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly through your native forrests.",
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 1 },
        equipmentProficiency: { inherent: [Equipment.Rapier, Equipment.Shortsword, Equipment.CrossbowHand], selectable: null },
        traits: { inherent: [Trait.SuperiorDarkvision, Trait.SunlightSensitivity, Trait.DrowMagic], selectable: null },
    }),
    HighElf: new SubRaceObject({
        description: "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.",
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 1, Wisdom: 0, Charisma: 0 },
        equipmentProficiency: { inherent: [Equipment.Longsword, Equipment.Shortsword, Equipment.Shortbow, Equipment.Longbow], selectable: null },
        languages: { inherent: null, selectable: [{ num: 1, options: [Language.Dwarvish, Language.Giant, Language.Gnomish, Language.Goblin, Language.Halfling, Language.Orc, Language.Abyssal, Language.Celestial, Language.Draconic, Language.DeepSpeech, Language.Infernal, Language.Primordial, Language.Sylvan, Language.Undercommon] }] },
        traits: { inherent: [], selectable: [{ num: 1, options: [Spell.Light, Spell.MageHand, Spell.Mending, Spell.Message, Spell.MinorIllusion, Spell.AcidSplash, Spell.Prestidigitation, Spell.RayOfFrost, Spell.ShockingGrasp, Spell.TrueStrike, Spell.ChillTouch, Spell.DancingLights] }] },
    }),
    WoodElf: new SubRaceObject({
        description: "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly through your native forests.",
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 1, Charisma: 0 },
        equipmentProficiency: { inherent: [Equipment.Longsword, Equipment.Shortsword, Equipment.Shortbow, Equipment.Longbow], selectable: null },
        traits: { inherent: [Trait.FleetOfFoot, Trait.MaskOfTheWild], selectable: null },
    }),
    LightfootHalfling: new SubRaceObject({
        description: "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.",
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 1 },
        traits: { inherent: [Trait.NaturallyStealthy], selectable: null },
    }),
    StoutHalfling: new SubRaceObject({
        description: "As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.",
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 1, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        traits: { inherent: [Trait.StoutResilience], selectable: null },
    }),
    HillDwarf: new SubRaceObject({
        description: "As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.",
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 1, Charisma: 0 },
        traits: { inherent: [Trait.DwarvenToughness], selectable: null },
    }),
    MountainDwarf: new SubRaceObject({
        description: "As a mountain dwarf, you're strong and hardy, accustomed to a difficult life in rugged terrain. You're probably on the tall side (for a dwarf), and tend toward lighter coloration.",
        abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        equipmentProficiency: { inherent: [ ...MediumArmor, ...HeavyArmor ], selectable: null },
    }),
}
