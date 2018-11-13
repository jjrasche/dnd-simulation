import { AbilityScores } from "./ability.model";
import { ClassObject } from "../enum/class.enum";
import { RaceObject, Race } from "../enum/race.enum";
import { SpellObject } from "../enum/spell.enum";
import { SkillEnum } from "../enum/skill.enum";
import { LevelObject } from "../enum/level.enum";
import { Condition } from "selenium-webdriver";
import { ConditionObject } from "../enum/money.enum";
import { AbilityEnum } from "../enum/ability.enum";
import { copyBuild, Factory } from "../utils/objectManipulation";
import { LanguageObject } from "../enum/language.enum";

/**
 * Anytime get is called on a property, this method is run 
 */
var modifierCaller = {
    get: function (build, prop) {
        let origValue = build[prop];
        console.log(`1 getting property '${prop}' from build '${build.takeBase}'`);
        if (build.takeBase) {
            return origValue;
        }

        let buildCopy = copyBuild(build);
        buildCopy.takeBase = true;
        // run all modifiers
        buildCopy.race.effect(buildCopy);


        console.log(`2 getting property '${prop}' from build '${build.takeBase}'. value was '${JSON.stringify(origValue)}' now '${JSON.stringify(build[prop])}'`);
        // return buildProps[prop];
        return buildCopy[prop];
    }
};

export class Build {
    // Workaround to get type safety and tie an object to the type
    // can do Class.Bard.<property> instead of Class[ClassName.Bard].<property
    takeBase: boolean = false;
    race: RaceObject;
    class: ClassObject;
    spellsInAffect: SpellObject[];
    skillProficiency: { [key in SkillEnum]: number };
    level: LevelObject;
    conditions: ConditionObject[];    
    darkVision: number;

    // variable that all modifiers alter  
    public ability: { [key in AbilityEnum]: number };
    
    constructor() {
        return new Proxy(this, modifierCaller);
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
      * - getMod(ability), returns modifier: number based on ability score
      * - hitpoints(), returns number === hitPoints - damage + temporaryHitPoints
      * 
      */

      private _speed: number;
      get speed(): number {
        return this._speed;
      }

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

       private applyLevel(): Build {
            return this;
       }
    
}
