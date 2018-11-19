import { ClassObject } from "../enum/class.enum";
import { RaceObject } from "../enum/race.enum";
import { SpellObject } from "../enum/spell.enum";
import { SkillEnum, defaultSkill } from "../enum/skill.enum";
import { LevelObject } from "../enum/level.enum";
import { AbilityEnum, defaultAbilityScore, defaultSavingThrow } from "../enum/ability.enum";
import { copyBuild } from "../utils/objectManipulation";
import { LanguageObject } from "../enum/language.enum";
import { BackgroundObject } from "../enum/background.enum";
import { EquipmentObject } from "../enum/equipment/equipment.enum";
import { ActionTypeEnum } from "../enum/action-type.enum";
import { BuildAffectingObject } from "./common";
import { ConditionObject } from "../enum/condition.enum";
import { initializeObjects } from "../enum/base-object";

/**
 * Anytime a property is retrieved, this method applies all modifying effects
 */
var handler = {
    get: function (build, prop) {
        let origValue = build[prop];
        // console.log(`1 getting property '${prop}' from build '${build.takeBase}'`);
        if (build.takeBase) {
            return origValue;
        }

        // order of applying effects: race, class, background, level, conditions, spells, equipment


        let buildCopy = copyBuild(build);
        buildCopy.takeBase = true;
        // run all modifiers
        buildCopy.apply(buildCopy.race);
        buildCopy.apply(buildCopy.class);
        buildCopy.apply(buildCopy.background);
        buildCopy.apply(buildCopy.level);
        buildCopy.applyAll(buildCopy.spellsInAffect);
        buildCopy.applyAll(buildCopy.conditions);
        // console.log(`2 getting property '${prop}' from build '${build.takeBase}'. value was '${JSON.stringify(origValue)}' now '${JSON.stringify(build[prop])}'`);
        // return buildProps[prop];
        return buildCopy[prop];
    }
    // ,
    // set: function (build, prop, value): boolean {
    //     // consider situation where damage is an attack roll happens agianst a build Damage: {num: __, type: __}
    //     console.log(`setting property '${JSON.stringify(prop)}' on build to '${JSON.stringify(value)}'`);
    //     build[prop] = value;
    //     return true
    // }
};

export class Build {
    // build properties that involve an initial choice
    race: RaceObject = null;
    class: ClassObject = null;
    level: LevelObject;
    background: BackgroundObject = null;
    language: LanguageObject[]
    maxHealth: number = 0;
    ability: { [key in AbilityEnum]: number } = defaultAbilityScore;
    skill: { [key in SkillEnum]: boolean } = defaultSkill;    

    // current state of build properties
    equipment: EquipmentObject[];
    spellsInAffect: SpellObject[] = [];
    conditions: ConditionObject[] = [];
    damage: number = 0;

    // calcualable properties
    darkVision: number = 0;
    speed: number = 0;
    proficiencyBonus: number = 0;
    savingThrow: { [key in AbilityEnum]: boolean } = defaultSavingThrow;
    armorClass: number = 10;
    // allows each piece of equipment to dictate what you can do
    actions: [{ object: EquipmentObject, actionType: ActionTypeEnum }] // do x with y 


    constructor() {
        initializeObjects();
        return new Proxy(this, handler);
    }

    /** accessing Build.<properties> while going through modifiers
     * I want to call Build.ability.Wisdom and return a value that starts with _abilityScores.Wisdom and is altered by modifiers
     *  Build.wisdom
     */

    /** permanent traits
     * name
     * race
     * background
     */

    /**
     * stable traits: cannot change within an encounter 
     * classes -- can multiclass, describes both a Class and level in that class
     * alignment -- this can possibly change given a characters experience
     * level
     * max hit points
     * proficient skills -- multiclassing or skilled feat can add skill proficiency
     * proficient throws -- resilient feat can add a throw proficiency
     * equipment: Equipment[]
     */

     /** current state traits: changeable within an encounter
      * inspiration: boolean
      * current hit points: number
      * condition: Condition[]
      * spellsInAffect: Spells[]
      * damage: number
      * temporaryHitPoints: number
      * languages: Language[]
      * money: Money 
      */

     /** calculated traits: accounts for all temporary or permanent aspects of the build affecting the trait. Does not consider environment factors.
      * - armor class(), returns number === armor + shiled + dex when armor doesn't specify, spells
      * - skill check(skill), returns modifier: number
      * - saving throw(ability), returns modifier: number
      * - proficiencyBonus(), returns bonus === proficiencyBonusChart[level]
      * - initiative(), returns modifier: number === dexMod
      * - darkVision(), returns number === race/class can be modified by spells Darkvision
      * - speed(), returns number === race/class can be modified by spells Haste, Slow
      * - hitpoints(), returns number === hitPoints - damage + temporaryHitPoints
      * 
      */

      /** all traits
       * armorClass()
       * skillMdoifier(skill)
       * throwModifier(ability)
       * proficiencyBonus()
       * proficiency(equipment: Equipment)
       * initiative()
       * darkVision()
       * speed()
       * hitpoints()
       * languages()
       */

      /** How to dynamically apply build choice's and current state's affect on calculated traits? 
       * change agents
       *    applyLevel()
       *    applySpells() 
       *    applyFeats()
       *    applyConditions()
       *    applyProficiency()
       *    applyTraits()  -- Damage Resistance  === resistance to the dragon type
       *    applyEquipment() -- some armor has disadvantage on stealth
       * 
       * example
       *    call to darkVision()
       *    initialize to race.darkVision
       *    applySpells() -- iterate over spells invoking their modification on a copy of build return the modified build
       *    ...
       *    ...
       *    return buildCopy.darkVision
       * 
       */

    private apply(obj: BuildAffectingObject): void {
        if (obj) {
            if (obj.effect) {
                obj.effect(this);
            } else {
                // console.log(`background '${this.background.toString()}' has no effect property`);
            }
        } else {
            // console.log(`this build has no background property`);
        }
    }

    private applyAll(objects: Array<BuildAffectingObject>): void {
        if (objects != null) {
            objects.forEach((obj: BuildAffectingObject) => {
                if (obj.effect) {
                    obj.effect(this);
                } else {
                    // console.log(`background '${this.background.toString()}' has no effect property`);
                }
            })
        } else {
            // console.log(`this build has no background property`);
        }
    }
     
    // used to prevent looping when using getters within effects.
    takeBase: boolean = false;
}
