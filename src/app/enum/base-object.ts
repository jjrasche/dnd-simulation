import { Weapon, WeaponEnum, WeaponObject } from "./equipment/weapon.enum";
import { Tool, ToolEnum, ToolObject } from "./equipment/tools.enum";
import { GearObject, GearEnum, Gear } from "./equipment/gear.enum";
import { PackEnum, PackObject, Pack } from "./equipment/pack.enum";
import { ArmorEnum, ArmorObject, Armor } from "./equipment/armor.enum";
import { EquipmentEnums, Equipment, initializeEquipment } from "./equipment/equipment";
import { AbilityEnum, AbilityObject, Ability } from "./ability.enum";
import { BackgroundEnum, BackgroundObject, Background } from "./background.enum";
import { ClassEnum, ClassObject, Class } from "./class.enum";
import { ComponentEnum, ComponentObject, Component } from "./component.enum";
import { ConditionEnum, ConditionObject, Condition } from "./condition.enum";
import { DamageTypeEnum, DamageTypeObject, DamageType } from "./damage.enum";
import { LanguageEnum, LanguageObject, Language } from "./language.enum";
import { LevelEnum, LevelObject, Level } from "./level.enum";
import { RaceEnum, RaceObject, Race } from "./race.enum";
import { SkillEnum, SkillObject, Skill } from "./skill.enum";
import { SpellEnum, SpellObject, Spell } from "./spell.enum";
import { SubRaceEnum, SubRaceObject, SubRace } from "./subRace.enum";
import { TraitEnum, TraitObject, Trait } from "./trait.enum";
import { EquipmentObject } from "./equipment/equipment.enum";
import { addKeyModifier, modifyDataStructure, verifyEnumKeyUniqueness } from "../models/common";

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

export class BaseObject {
    // allows comparisons between objects to easily be made
    key?: string;
    description: string;
    // type: ObjectType;
}
