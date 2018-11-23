import { copyBuild } from "../utils/objectManipulation";
import { ActionTypeEnum } from "../enum/action-type.enum";
import { RaceObject } from "./race.model";
import { ClassObject } from "./class.model";
import { LevelObject } from "./level.model";
import { BackgroundObject } from "./background.model";
import { LanguageObject } from "./language.model";
import { AbilityEnum } from "../enum/ability.enum";
import { defaultAbilityScore, defaultSavingThrow } from "./ability.model";
import { SkillEnum } from "../enum/skill.enum";
import { defaultSkill } from "./skill.model";
import { EquipmentObject } from "./equipment/equipment.model";
import { SpellObject } from "./spell.model";
import { ConditionObject } from "./condition.model";
import { initializeObjects } from "./base.object.data";
import { BuildAffectingObject, BuildEffect } from "./build.object";
import { SubRaceObject } from "./subRace.model";
import { DamageTypeEnum } from "../enum/damage.enum";


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


        let buildCopy: Build = copyBuild(build);
        buildCopy.takeBase = true;
        // run all modifiers
        buildCopy.addModification(buildCopy.race);
        buildCopy.addModification(buildCopy.subRace);
        buildCopy.addModification(buildCopy.class);
        buildCopy.addModification(buildCopy.background);
        buildCopy.addModification(buildCopy.level);
        buildCopy.addModifications(buildCopy.conditions);
        buildCopy.addModifications(buildCopy.spellsInAffect);

        // console.log(buildCopy.modifications);
        // applyEffects
        buildCopy.modifications.forEach((mod: BuildEffect) => {
            buildCopy.applyEffect(mod);
        });
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
    race: RaceObject;
    subRace: SubRaceObject;
    class: ClassObject;
    level: LevelObject;
    background: BackgroundObject;
    language: Array<LanguageObject>;
    maxHealth: number = 0;
    ability: { [key in AbilityEnum]: number } = defaultAbilityScore;
    skill: { [key in SkillEnum]: boolean } = defaultSkill;    

    // current state of build properties
    equipment: EquipmentObject[] = [];
    spells: SpellObject[] = [];
    spellsInAffect: SpellObject[] = [];
    conditions: ConditionObject[] = [];
    damageModifier: { [key in DamageTypeEnum]: string}; // current resistance, vulnerability, and immunity tied to a given damageType
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

    public applyEffect(obj: BuildEffect): void {
        if (obj && obj.effect) {
            obj.effect(this);
        }
    }

    public addModification(obj: BuildAffectingObject): void {
        if (obj && obj.mod) {
            let mods: BuildEffect[] = obj.mod;
            this.modifications = [ ...this.modifications, ...mods];
        }
    }

    public addModifications(objs: BuildAffectingObject[]): void {
        if (objs) {
            objs.forEach((obj: BuildAffectingObject) => {
                this.addModification(obj);
            });
        }
    }
     
    // used to prevent looping when using getters within effects.
    takeBase: boolean = false;
    modifications: Array<BuildEffect> = [];
}
