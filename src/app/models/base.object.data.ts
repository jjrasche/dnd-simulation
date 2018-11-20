import { AbilityObject, Ability } from "./ability.model";
import { BackgroundObject, Background } from "./background.model";
import { ClassObject, Class } from "./class.model";
import { ComponentObject, Component } from "./component.model";
import { ConditionObject, Condition } from "./condition.model";
import { DamageTypeObject, DamageType } from "./damage.model";
import { LanguageObject, Language } from "./language.model";
import { LevelObject, Level } from "./level.model";
import { RaceObject, Race } from "./race.model";
import { SkillObject, Skill } from "./skill.model";
import { SpellObject, Spell } from "./spell.model";
import { SubRaceObject, SubRace } from "./subRace.model";
import { TraitObject, Trait } from "./trait.model";
import { modifyDataStructure, addKeyModifier } from "./model-initialization";
import { AbilityEnum } from "../enum/ability.enum";
import { BackgroundEnum } from "../enum/background.enum";
import { ClassEnum } from "../enum/class.enum";
import { ComponentEnum } from "../enum/component.enum";
import { ConditionEnum } from "../enum/condition.enum";
import { DamageTypeEnum } from "../enum/damage.enum";
import { LanguageEnum } from "../enum/language.enum";
import { LevelEnum } from "../enum/level.enum";
import { RaceEnum } from "../enum/race.enum";
import { SkillEnum } from "../enum/skill.enum";
import { SpellEnum } from "../enum/spell.enum";
import { SubRaceEnum } from "../enum/subRace.enum";
import { TraitEnum } from "../enum/trait.enum";
import { EquipmentEnums, Equipment, initializeEquipment } from "./equipment/equipment.data";

const ObjectEnums = [AbilityEnum, BackgroundEnum, ClassEnum, ComponentEnum, ConditionEnum, DamageTypeEnum, LanguageEnum, LevelEnum,
    RaceEnum, SkillEnum, SpellEnum, SubRaceEnum, TraitEnum, EquipmentEnums];
// type ObjectEnumsType = AbilityEnum | BackgroundEnum | ClassEnum | ComponentEnum | ConditionEnum | DamageTypeEnum | LanguageEnum | LevelEnum | 
//     RaceEnum| SkillEnum | SpellEnum | SubRaceEnum | TraitEnum | EquipmentEnums;
// type ObjectClasses = AbilityObject | BackgroundObject | ClassObject | ComponentObject | ConditionObject | DamageTypeObject | LanguageObject | 
//     LevelObject | RaceObject | SkillObject | SpellObject | SubRaceObject | TraitObject | EquipmentObject;
let ObjectData = { ...Ability, ...Background, ...Class, ...Component, ...Condition, ...DamageType, ...Language, ...Level, ...Race, ...Skill,
    ...Spell, ...SubRace, ...Trait, ...Equipment };

// export const Objects: { [key in ObjectEnumsType]: ObjectClasses } = ObjectData;

/**
 * add key to all objects and verify the enums that make up Object are unique.
 */
export function initializeObjects() {
    // add Key to all objects
    modifyDataStructure(ObjectData, [addKeyModifier]);
    // verifyEnumKeyUniqueness(ObjectEnums);
    initializeEquipment();
}
