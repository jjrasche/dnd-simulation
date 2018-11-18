import { Weapon, WeaponEnum, WeaponObject } from "./equipment/weapon.enum";
import { Tool, ToolEnum, ToolObject } from "./equipment/tools.enum";
import { GearObject, GearEnum, Gear } from "./equipment/gear.enum";
import { PackEnum, PackObject, Pack } from "./equipment/pack.enum";
import { ArmorEnum, ArmorObject, Armor } from "./equipment/armor.enum";
import { EquipmentEnums, Equipment } from "./equipment/equipment";
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

const ObjectEnums: Object[] = [AbilityEnum, BackgroundEnum, ClassEnum, ComponentEnum, ConditionEnum, DamageTypeEnum, LanguageEnum, LevelEnum,
    RaceEnum, SkillEnum, SpellEnum, SubRaceEnum, TraitEnum, ...EquipmentEnums];
type ObjectEnums = AbilityEnum | BackgroundEnum | ClassEnum | ComponentEnum | ConditionEnum | DamageTypeEnum | LanguageEnum | LevelEnum | 
    RaceEnum| SkillEnum | SpellEnum | SubRaceEnum | TraitEnum | EquipmentEnums;
type ObjectClasses = AbilityObject | BackgroundObject | ClassObject | ComponentObject | ConditionObject | DamageTypeObject | LanguageObject | 
    LevelObject | RaceObject | SkillObject | SpellObject | SubRaceObject | TraitObject | EquipmentObject;
let ObjectData = { ...Ability, ...Background, ...Class, ...Component, ...Condition, ...DamageType, ...Language, ...Level, ...Race, ...Skill,
    ...Spell, ...SubRace, ...Trait, ...Equipment };

export const Obj: { [key in ObjectEnums]: ObjectClasses } = ObjectData;

// add enum as the key property on all objects for tracking in arrays
export function initializeObject() {
    Object.keys(Obj).forEach(key => {
        Obj[key].key = key;
    });
    if (enumsDuplicated(ObjectEnums)) {
        throw (`The following keys are dupliactated on Object Enums: '${getDuplicatedEnumKeys(ObjectEnums)}'`)
    } 
}

export interface BaseObject {
    // allows comparisons between objects to easily be made
    key?: string;
    description: string;
    // type: ObjectType;
}

/**
 * 
 * @param enums Array of enums to compare keys across.
 * returns an object with enum keys as key and value as number of ocurrences.
 * Complexity O(n) where n is number of enum keys between all enums.
 */
export const enumKeysCount = (enums: Object[]): Object => enums.reduce((acc: Object, currEnum: Object) => {
    // add this enums keys to any existing key, incrementing by 1 if that key already existed.
    let currEnumCount =
        Object.keys(currEnum).reduce((accInner: { string: number }, curr: string) =>
            ({ ...accInner, [curr]: (acc[curr] || 0) + 1 }), {});

    return { ...acc, ...currEnumCount };
}, {});

/**
 * @param dict dictionary created from enumKeysCount with value being num occurrences of that key
 * returns list of all keys used more than once
 */
export const getDuplicatedEnumKeys = (enumKeyCounts: Object): Array<Object> => Object.keys(enumKeyCounts).filter(key => enumKeyCounts[key] > 1);
export const enumsDuplicated = (enumKeyCounts: Object): boolean => getDuplicatedEnumKeys(enumKeyCounts).length > 0;
