
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
import { initializeObject, Obj, enumKeysCount, enumsDuplicated} from '../enum/base-object';

describe('BuildModel', () => {

    // it("Equipment Object ", () => {
    //     initializeObject();

    //     // console.log(Class.Bard.equipmentProficiency.inherent[6])

    //     console.log(ObjectType2)
    //     console.log(Object.keys(ObjectType2))
    //     console.log(test)

    //     expect(Equipment.Crystal.key).toEqual("Crystal");
    //     expect(Equipment.Sling).toBe(Weapon.Sling);
    //     expect(Obj.Strength).toEqual(Ability.Strength)
    // });

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
        let resultKeyCounts = enumKeysCount(enums);

        expect(resultKeyCounts).toEqual({A: 2, B: 1, C: 1});
        expect(enumsDuplicated(resultKeyCounts)).toBe(true);
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
        let resultKeyCounts = enumKeysCount(enums);

        expect(resultKeyCounts).toEqual({ A: 1, B: 1, C: 1, D: 1 });
        expect(enumsDuplicated(resultKeyCounts)).toBe(false);
    });



    
});