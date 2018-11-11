import { AbilityScores } from "./ability.model";
import { ClassObject } from "../enum/class.enum";

export class Build {
    // Workaround to get type safety and tie an object to the type
    // can do Class.Bard.<property> instead of Class[ClassName.Bard].<property
    class: ClassObject;
    
    /** permanent traits
     * name
     * race
     * background
     * base speed
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
      * - proficiency(), returns bonus === proficiencyBonusChart[level]
      * - initiative(), returns modifier: number === dexMod
      * - vision(), returns number === race/class can be modified by spells Darkvision
      * - speed(), returns number === race/class can be modified by spells Haste, Slow
      * - getMod(ability), returns modifier: number based on ability score
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

    
    ability: AbilityScores;
    
}
