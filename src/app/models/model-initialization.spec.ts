
import { Build } from './build.model';
import { GetBasicBarbarianBuild } from './build.model.spec.data';
import { Class, ClassObject } from '../enum/class.enum';
import { Race, RaceObject } from '../enum/race.enum';
import { Spell, SpellObject } from '../enum/spell.enum';
import { Level, LevelObject } from '../enum/level.enum';
import { Condition, ConditionObject } from '../enum/condition.enum';
import { Tool, ToolByCategory } from '../enum/equipment/tools.enum';
import { TraitObject } from '../enum/trait.enum';
import { BackgroundObject, Background } from '../enum/background.enum';
import { Skill } from '../enum/skill.enum';
import { Ability } from '../enum/ability.enum';
import { WeaponObject, SimpleMeleeWeapons, Weapon, SimpleRangeWeapons, MartialeMeleeWeapons, MartialRangeWeapons } from '../enum/equipment/weapon.enum';
import { WeaponPropertyObject } from '../enum/equipment/weaponProperty.enum';
import { LightArmor, ArmorObject, ArmorCategory } from '../enum/equipment/armor.enum';
import { GearCategories, AllGear, GearCategory, GearObject, GearByCategory, GearEnum } from '../enum/equipment/gear.enum';
import { Equipment } from '../enum/equipment/equipment';
import { BaseObject, initializeObjects } from '../enum/base-object';
import { enumKeysCount, enumsDuplicated, addKeyModifier, initializeDataStructure,  } from './common';

describe('BuildModel', () => {

    it("Equipment Object ", () => {
        enum OneEnum {
            A = "A",
            B = "B",
        };
        const OneData: { [key in OneEnum]: Object } = {
            A: {},
            B: {}
        };
        enum TwoEnum {
            A = "A",
            C = "C",
        };
        const TwoData: { [key in TwoEnum]: Object } = {
            A: {},
            C: {}
        };

        const ObjectEnums = [OneEnum, TwoEnum];
        const ObjectData = { ...OneData, ...TwoData };

        expect(() => initializeDataStructure(ObjectData, [addKeyModifier], ObjectEnums)).toThrow();
        expect(OneData.B["key"]).toBeDefined();
        expect(TwoData.A["key"]).toBeDefined();
        expect(TwoData.C["key"]).toBeDefined();
        // since this dupliate is overwritten by TwoData.A, it is not apart of ObjectData and will not get the key property
        expect(OneData.A["key"]).toBeUndefined();
    });

    it("duplicate enum check: given enums that do use duplicate keys, then enumsDuplicate is true", () => {
        enum One {
            A = "A",
            B = "B",
        };
        enum Two {
            A = "A",
            C = "C",
        };
        let enums = [One, Two];

        expect(enumKeysCount(enums)).toEqual({A: 2, B: 1, C: 1});
        expect(enumsDuplicated(enums)).toBe(true);
    });

    it("duplicate enum check: given enums that do not use duplicate keys, then enumsDuplicate is false", () => {
        enum One {
            A = "A",
            B = "B",
        };
        enum Two {
            C = "C",
            D = "D",
        };
        let enums = [One, Two];

        expect(enumKeysCount(enums)).toEqual({ A: 1, B: 1, C: 1, D: 1 });
        expect(enumsDuplicated(enums)).toBe(false);
    });



    
});