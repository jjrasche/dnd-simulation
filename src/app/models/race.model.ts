import { applyToBuildFromObject, BaseBuildAffectingConstructor, BaseBuildAffectingObject, BuildEffect, BuildEffectOperation } from "./build.object";
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

interface IRaceObject {
    subRaces?: SubRaceObject[];
    abilityModifier: { [ability in AbilityEnum]: number };
    size: Size;
    equipmentProficiency: settings<EquipmentObject>;
    skillProficiency: settings<SkillObject>;
    languages: settings<LanguageObject>;
    speed: number;
    traits: TraitObject[];
}
type RaceConstructor = IRaceObject & BaseBuildAffectingConstructor;

export class RaceObject extends BaseBuildAffectingObject {
    subRaces?: SubRaceObject[];
    abilityModifier: { [ability in AbilityEnum]: number };
    size: Size;
    equipmentProficiency: settings<EquipmentObject>;
    skillProficiency: settings<SkillObject>;
    languages: settings<LanguageObject>;
    speed: number;
    traits: TraitObject[];

    constructor(obj: RaceConstructor) {
        super(obj);
        this.subRaces = obj.subRaces;
        this.abilityModifier = obj.abilityModifier;
        this.size = obj.size;
        this.equipmentProficiency = obj.equipmentProficiency;
        this.skillProficiency = obj.skillProficiency;
        this.languages = obj.languages;
        this.speed = obj.speed;
        this.traits = obj.traits;


        Object.keys(this.abilityModifier || {}).forEach(key => {
            let bonus: number = this.abilityModifier[key];
            this.mod.push(new BuildEffect({
                name: "race",
                property: `ability.${key}`,
                operation: BuildEffectOperation.Add,
                value: bonus.toString()
            }));
        });
        
        if (this.traits) {
            this.traits.map((trait: TraitObject) => trait.mod)
                .forEach((effects: BuildEffect[]) => effects
                    .forEach((be: BuildEffect) => this.mod.push(be)));
        }
    }
}

export const Race: { [key in RaceEnum]: RaceObject } = {
    Dwarf: new RaceObject({
        description: "",
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
    }),
    Elf: new RaceObject({
        description: "",
        subRaces: [SubRace.WoodElf, SubRace.HighElf, SubRace.DarkElf],
        abilityModifier: { Strength: 0, Dexterity: 2, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: { inherent: [Skill.Perception], selectable: null },
        languages: { inherent: [Language.Common, Language.Elvish], selectable: null },
        traits: [Trait.Darkvision, Trait.FeyAncestry, Trait.Trance],
    }),
    Halfling: new RaceObject({
        description: "",
        subRaces: [SubRace.LightfootHalfling, SubRace.StoutHalfling ],
        abilityModifier: { Strength: 0, Dexterity: 2, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Small,
        speed: 25,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherent: [Language.Common, Language.Halfling], selectable: null },
        traits: [Trait.Brave, Trait.HalflingNimbleness, Trait.Lucky],
    }),
    Human: new RaceObject({
        description: "",
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
    }),
    Dragonborn: new RaceObject({
        description: "",
        abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 1 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherent: [Language.Common, Language.Draconic], selectable: null },
        traits: [Trait.DraconicAncestry, Trait.BreathWeapon, Trait.DamageResistance],
    }),
    Gnome: new RaceObject({
        description: "",
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 2, Wisdom: 0, Charisma: 0 },
        size: Size.Small,
        speed: 25,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherent: [Language.Common, Language.Gnomish], selectable: null },
        traits: [Trait.Darkvision, Trait.GnomeCunning],
    }),
    HalfElf: new RaceObject({
        description: "",
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
    }),
    HalfOrc: new RaceObject({
        description: "",
        abilityModifier: { Strength: 2, Dexterity: 0, Constitution: 1, Intelligence: 0, Wisdom: 0, Charisma: 0 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: { inherent: [Skill.Intimidation], selectable: null },
        languages: { inherent: [Language.Common, Language.Orc], selectable: null },
        traits: [Trait.Darkvision, Trait.SavageAttacks, Trait.RelentlessEndurance],
    }),
    Tiefling: new RaceObject({
        description: "",
        abilityModifier: { Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 1, Wisdom: 0, Charisma: 2 },
        size: Size.Medium,
        speed: 30,
        equipmentProficiency: null,
        skillProficiency: null,
        languages: { inherent: [Language.Common, Language.Infernal], selectable: null },
        traits: [Trait.Darkvision, Trait.HellishResistance, Trait.InfernalLegacy],
    }),
}
