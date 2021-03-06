import { BuildAffectingObject, applyToBuild, BaseBuildAffectingConstructor, BaseBuildAffectingObject, BuildEffect } from "./build.object";
import { settings, settingsWithGroupedOptions } from "./setting.model";
import { SkillObject, Skill } from "./skill.model";
import { AbilityObject, Ability } from "./ability.model";
import { EquipmentObject } from "./equipment/equipment.model";
import { Die } from "../enum/die.enum";
import { Build } from "./build.model";
import { ClassEnum } from "../enum/class.enum";
import { LightArmor, MediumArmor, Shields, AllArmor } from "./equipment/armor.model";
import { AllWeapons, WeaponObject, SimpleWeapons } from "./equipment/weapon.model";
import { Equipment } from "./equipment/equipment.data";

interface IClassObject {
   skill: settings<SkillObject>;
   savingThrows: AbilityObject[];
   equipmentProficiency: settings<EquipmentObject>;
   hitDie: Die;
   startingEquipment: settingsWithGroupedOptions<EquipmentObject>;
}
type ClassConstructor = IClassObject & BaseBuildAffectingConstructor;

export class ClassObject extends BaseBuildAffectingObject {
    skill: settings<SkillObject>;
    savingThrows: AbilityObject[];
    equipmentProficiency: settings<EquipmentObject>;
    hitDie: Die;
    // capable of selecting from groups of objects. e.g. cleric can choose between [light crowwbow and 20 arrows] or any simple weapon
    startingEquipment: settingsWithGroupedOptions<EquipmentObject>;

   constructor(obj: ClassConstructor) {
      super(obj);
      this.skill = obj.skill;
      this.savingThrows = obj.savingThrows;
      this.equipmentProficiency = obj.equipmentProficiency;
      this.hitDie = obj.hitDie;
      this.startingEquipment = obj.startingEquipment;

      this.mod.push(new BuildEffect({
         name: "class",
         property: "skill",
         effect: (b: Build) => applyToBuild(() => this.skill.inherent, k => b.skill[k] = true)
      }));
      this.mod.push(new BuildEffect({
         name: "class",
         property: "savingThrow",
         effect: (b: Build) => applyToBuild(() => this.savingThrows, k => b.savingThrow[k] = true)
      }));
   }
};


/**
 * Stores object data b/c Enum can't store objects directly.
 * Limits usage of Classes to only those specified in ClassEnum.
 * Class.Bard (good) Class.Fairy (fails)
 */
export const Class: { [key in ClassEnum]: ClassObject } = {
    Barbarian: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 2, options: [Skill.AnimalHandling, Skill.Athletics, Skill.Intimidation, Skill.Nature, Skill.Perception, Skill.Survival] }] },
      savingThrows: [Ability.Strength, Ability.Constitution],
      equipmentProficiency: {
         inherent: [
               ...LightArmor,
               ...MediumArmor,
               ...Shields,
               ...AllWeapons,
         ],
         selectable: null
      },
      hitDie: Die.D12,
      startingEquipment: { inherent: [ Equipment.ExplorerPack, { quantity: 4, ...Equipment.Javelin } as WeaponObject ], selectable: null },
    }),
    Bard: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 3, options: [Skill.Athletics, Skill.Acrobatics, Skill.SleightOfHand, Skill.Stealth, Skill.Arcana, Skill.History, Skill.Investigation, Skill.Nature, Skill.Religion, Skill.AnimalHandling, Skill.Insight, Skill.Medicine, Skill.Perception, Skill.Survival, Skill.Deception, Skill.Intimidation, Skill.Performance, Skill.Persuasion] }] },
      savingThrows: [Ability.Dexterity, Ability.Charisma],
      equipmentProficiency: {
         inherent: [
               ...LightArmor,
               ...SimpleWeapons,
               Equipment.Longsword,
               Equipment.Rapier,
               Equipment.Shortsword,
               Equipment.CrossbowHand,
         ],
         selectable: null
      },
      hitDie: Die.D8,
      // get leather armor and dagger, can choose 
      startingEquipment: { inherent: [ Equipment.Leather, Equipment.Dagger ], selectable: null },
    }),
    Cleric: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 2, options: [Skill.History, Skill.Insight, Skill.Medicine, Skill.Persuasion, Skill.Religion] }] },
      savingThrows: [Ability.Wisdom, Ability.Charisma],
      equipmentProficiency: {
         inherent: [
               ...LightArmor,
               ...MediumArmor,
               ...Shields,
               ...SimpleWeapons,
         ],
         selectable: null
      },
      hitDie: Die.D8,
      // get shield and can choose from crossbow and bolts or any simple weapon
      // selectable: [{num:1, options:[ [Equipment.CrossBow, {quantity:20, }], SimpleWeapons]}]
      // { quantity: 10, ...Equipment.Dart } as WeaponObject
      startingEquipment: { 
         inherent: [Equipment.Shield],
         selectable: null
         // [
         //     {   groups: [ 
         //             [{ quantity: 20, ...Equipment.CrossbowBolt }, Equipment.CrossbowHand  ],
         //             SimpleWeapons
         //         ], num: 1 
         //     }, 
         //     {   groups: [
         //             [{ quantity: 20, ...Equipment.CrossbowBolt }, Equipment.CrossbowHand],
         //             SimpleWeapons
         //         ], num: 1
         //     },
         // ]
      },
    }),
    Druid: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Acrobatics, Skill.AnimalHandling, Skill.Athletics, Skill.History, Skill.Insight, Skill.Intimidation, Skill.Perception, Skill.Survival] }] },
      savingThrows: [Ability.Intelligence, Ability.Wisdom],
      equipmentProficiency: {
         inherent: [
               ...LightArmor,
               ...MediumArmor,
               ...Shields,
               Equipment.Club,
               Equipment.Dagger,
               Equipment.Javelin,
               Equipment.Mace,
               Equipment.Quarterstaff,
               Equipment.Sickle,
               Equipment.Spear,
               Equipment.Dart,
               Equipment.Sling,
               Equipment.Scimitar,
               Equipment.HerbalismKit,
         ],
         selectable: null
      },
      hitDie: Die.D8,
      startingEquipment: { inherent: [ Equipment.Leather, Equipment.ExplorerPack ], selectable: null },
    }),
    Fighter: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Acrobatics, Skill.Athletics, Skill.History, Skill.Insight, Skill.Religion, Skill.Stealth] }] },
      savingThrows: [Ability.Strength, Ability.Constitution],
      equipmentProficiency: {
         inherent: [
               ...AllArmor,
               ...AllWeapons,
               ...Shields,
         ],
         selectable: null
      },
      hitDie: Die.D10,
      startingEquipment: { inherent: null, selectable: null },
    }),
    Monk: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Acrobatics, Skill.Athletics, Skill.History, Skill.Insight, Skill.Religion, Skill.Stealth] }] },
      savingThrows: [Ability.Strength, Ability.Dexterity],
      equipmentProficiency: {
         inherent: [
               ...SimpleWeapons,
               Equipment.Shortsword,
         ],
         selectable: null
      },
      hitDie: Die.D8,
      startingEquipment: { inherent: [ { quantity: 10, ...Equipment.Dart } as WeaponObject ], selectable: null },
    }),
    Paladin: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Athletics, Skill.Insight, Skill.Intimidation, Skill.Medicine, Skill.Persuasion, Skill.Religion] }] },
      savingThrows: [Ability.Wisdom, Ability.Charisma],
      equipmentProficiency: {
         inherent: [
               ...AllArmor,
               ...AllWeapons,
               ...Shields,
         ],
         selectable: null
      },
      hitDie: Die.D10,
      startingEquipment: { inherent: [ Equipment.ChainMail ], selectable: null },
    }),
    Ranger: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 3, options: [Skill.AnimalHandling, Skill.Athletics, Skill.Insight, Skill.Investigation, Skill.Nature, Skill.Perception, Skill.Stealth, Skill.Survival] }] },
      savingThrows: [Ability.Strength, Ability.Dexterity],
      equipmentProficiency: {
         inherent: [
               ...LightArmor,
               ...MediumArmor,
               ...AllWeapons,
               ...Shields,
         ],
         selectable: null
      },
      hitDie: Die.D10,
      startingEquipment: { inherent: [ Equipment.Longbow, { quantity: 20, ...Equipment.Arrow } as WeaponObject ], selectable: null },
    }),
    Rogue: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 4, options: [Skill.Acrobatics, Skill.Athletics, Skill.Deception, Skill.Insight, Skill.Intimidation, Skill.Investigation, Skill.Perception, Skill.Performance, Skill.Persuasion, Skill.SleightOfHand, Skill.Stealth] }] },
      savingThrows: [Ability.Dexterity, Ability.Intelligence],
      equipmentProficiency: {
         inherent: [
               ...LightArmor,
               ...SimpleWeapons,
               Equipment.Longsword,
               Equipment.Rapier,
               Equipment.Shortsword,
               Equipment.CrossbowHand,
               Equipment.ThievesTools,
         ],
         selectable: null
      },
      hitDie: Die.D8,
      startingEquipment: { inherent: [Equipment.Leather, { quantity: 2, ...Equipment.Dagger } as WeaponObject, Equipment.ThievesTools ], selectable: null },
    }),
    Sorcerer: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Arcana, Skill.Deception, Skill.Insight, Skill.Intimidation, Skill.Persuasion, Skill.Religion] }] },
      savingThrows: [Ability.Constitution, Ability.Charisma],
      equipmentProficiency: {
         inherent: [
               Equipment.Dagger,
               Equipment.Quarterstaff,
               Equipment.Dart,
               Equipment.Sling,
         ],
         selectable: null
      },
      hitDie: Die.D6,
      startingEquipment: { inherent: [ { quantity: 2, ...Equipment.Dagger } as WeaponObject ], selectable: null },
    }),
    Warlock: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Arcana, Skill.Deception, Skill.History, Skill.Intimidation, Skill.Investigation, Skill.Nature, Skill.Religion] }] },
      savingThrows: [Ability.Wisdom, Ability.Charisma],
      equipmentProficiency: {
         inherent: [
               ...LightArmor,
               ...SimpleWeapons,
         ],
         selectable: null
      },
      hitDie: Die.D8,
      startingEquipment: { inherent: [{ quantity: 2, ...Equipment.Dagger } as WeaponObject, Equipment.Leather ], selectable: null },
    }),
    Wizard: new ClassObject({
      description: "",
      skill: { inherent: null, selectable: [{ num: 2, options: [Skill.Arcana, Skill.History, Skill.Insight, Skill.Investigation, Skill.Medicine, Skill.Religion] }] },
      savingThrows: [Ability.Intelligence, Ability.Wisdom],
      equipmentProficiency: {
         inherent: [
               Equipment.Dagger,
               Equipment.Quarterstaff,
               Equipment.Dart,
               Equipment.Sling,
         ],
         selectable: null
      },
      hitDie: Die.D6,
      startingEquipment: { inherent: [ Equipment.Spellbook ], selectable: null },
    }),
};

/**
 * 
 * still trying to workout concept of selection groups e.g. I choose 1 from these EquipmentObject[]
 * Unsure how to add all equipment from a category as a single item array e.g. 
 * [Equipment.Spear] is a choice along side
 * [{ quantity: 20, ...Equipment.CrossbowBolt }, Equipment.CrossbowHand]
 * 
 *             selectable: [
                {   groups: [
                        [ [Equipment.Greataxe], ...MartialeMeleeWeapons  ],
                        SimpleWeapons
                    ], num: 1
                },
                {   groups: [
                        [{ quantity: 20, ...Equipment.CrossbowBolt }, Equipment.CrossbowHand],
                        SimpleWeapons
                    ], num: 1
                },
            ]

"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Greataxe"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...MartialeMeleeWeapons,]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Handaxe", quantity:2]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons, ...SimpleRangeWeapons]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Rapier"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Longsword"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons, ...SimpleRangeWeapons]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Diplomat's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Entertainer's Pack"]
         }
      ],
"choice_3":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Lute"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...ToolByCategory.MusicalInstrument,]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Mace"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Warhammer"
                  "prerequisites":[
                     {  "Warhammers"
                        }
                     }
                  ]]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Scale Mail"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Leather"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Chain Mail"
                  "prerequisites":[
                     {  "Chain Mail"
                        }
                     }
                  ]]
         }
      ],
"choice_3":[
         {
            "choose":2,
            "type":"equipment",
            "from":[  "Crossbow, light", "Crossbow bolt", quantity:20]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons, ...SimpleRangeWeapons]
         }
      ],
"choice_4":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Priest's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Explorer's Pack"]
         }
      ],
"choice_5":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...GearByCategory.HolySymbol,]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Shield"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons, ...SimpleRangeWeapons]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Scimitar"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons,]
         }
      ],
"choice_3":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...GearByCategory.Druidicfocus,]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Chain Mail"]
         },
         {
            "choose":3,
            "type":"equipment",
            "from":[  "Leather", "Longbow", "Arrow", quantity:20]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Shield"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...MartialeMeleeWeapons,, ...MartialRangeWeapons,]
         }
      ],
"choice_3":[
         {
            "choose":2,
            "type":"equipment",
            "from":[  "Crossbow, light", "Crossbow bolt", quantity:20]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Handaxe", quantity:2]
         }
      ],
"choice_4":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Dungeoneer's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Explorer's Pack"]
         }
      ],
"choice_5":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...MartialeMeleeWeapons,, ...MartialRangeWeapons,]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Shortsword"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons, ...SimpleRangeWeapons]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Dungeoneer's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Explorer's Pack"]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Shield"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...MartialeMeleeWeapons,, ...MartialRangeWeapons,]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Javelin", quantity:5]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons, ...SimpleRangeWeapons]
         }
      ],
"choice_3":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Priest's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Explorer's Pack"]
         }
      ],
"choice_4":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...GearByCategory.HolySymbol,]
         }
      ],
"choice_5":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...MartialeMeleeWeapons,, ...MartialRangeWeapons,]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Scale Mail"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Shortsword"]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Dungeoneer's Pack", quantity:2]
         },
         {
            "choose":2,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons,]
         }
      ],
"choice_3":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Dungeoneer's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Explorer's Pack"]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Rapier"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Shortsword"]
         }
      ],
"choice_2":[
         {
            "choose":2,
            "type":"equipment",
            "from":[  "Shortbow", "Arrow", quantity:20]
         },
         {
            "choose":2,
            "type":"equipment",
            "from":[  "Shortsword"]
         }
      ],
"choice_3":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Burglar's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Dungeoneer's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Explorer's Pack"]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Crossbow, light", "Crossbow bolt", quantity:20]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons, ...SimpleRangeWeapons]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Component pouch", quantity:2]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...GearByCategory.Arcanefocus]
         }
      ],
"choice_3":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Dungeoneer's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Explorer's Pack"]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Crossbow, light", "Crossbow bolt", quantity:20]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons, ...SimpleRangeWeapons]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Component pouch", quantity:2]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...GearByCategory.Arcanefocus]
         }
      ],
"choice_3":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Scholar's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Dungeoneer's Pack"]
         }
      ],
"choice_4":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...SimpleMeleeWeapons, ...SimpleRangeWeapons]
         }
      ],
"choice_1":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Dagger"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Quarterstaff"]
         }
      ],
"choice_2":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Component pouch", quantity:2]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  ...GearByCategory.Arcanefocus]
         }
      ],
"choice_3":[
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Scholar's Pack"]
         },
         {
            "choose":1,
            "type":"equipment",
            "from":[  "Dungeoneer's Pack"]
         }
      ],
 */