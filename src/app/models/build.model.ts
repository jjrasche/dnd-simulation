import { copyBuild, propertyCopy } from "../utils/objectManipulation";
import { RaceObject } from "./race.model";
import { ClassObject } from "./class.model";
import { LevelObject } from "./level.model";
import { BackgroundObject } from "./background.model";
import { LanguageObject } from "./language.model";
import { AbilityEnum } from "../enum/ability.enum";
import { defaultAbilityScore, defaultSavingThrow, AbilityObject } from "./ability.model";
import { SkillEnum } from "../enum/skill.enum";
import { defaultSkill } from "./skill.model";
import { EquipmentObject } from "./equipment/equipment.model";
import { SpellObject } from "./spell.model";
import { ConditionObject } from "./condition.model";
import { initializeObjects } from "./base.object.data";
import { BuildAffectingObject, BuildEffect, RunBuildEffects, checkExpression } from "./build.object";
import { SubRaceObject } from "./subRace.model";
import { DamageTypeEnum } from "../enum/damage.enum";
import { Action } from "./action.model";


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
        let buildCopy: Build = copyBuild(build);
        buildCopy.takeBase = true;

        // accumulate all modifiers
        buildCopy.addModification(buildCopy.race);
        buildCopy.addModification(buildCopy.subRace);
        buildCopy.addModification(buildCopy.class);
        buildCopy.addModification(buildCopy.background);
        buildCopy.addModification(buildCopy.level);
        buildCopy.addModifications(buildCopy.conditions);
        buildCopy.addModifications(buildCopy.equipment);
        buildCopy.addModifications(buildCopy.spellsInAffect);

        // apply BuildEffects
        RunBuildEffects(buildCopy);
        // console.log(`2 getting property '${prop}' from build '${build.takeBase}'. value was '${JSON.stringify(origValue)}' now '${JSON.stringify(build[prop])}'`);
        return buildCopy[prop];
    }
};

/**
 *              Decision impacts 
 * The un modified value of these variables, what you would get by calling JSON.stringify(build)
 * represents the state of properties resulting from decisions made about this build.
 * e.g. JSON.parse(JSON.stringify(build))["language"] will contain all the languages decisions that were specifically made for this build.
 *  so if build.race.languages.selectable = {num: 1, options: [Language.Dwarvish, Language.Elvish]} and when prompted, the user picked Dwarvish,
 *  JSON.parse(JSON.stringify(build))["language"] = [Language.Dwarvish]
 * 
 *              Object impacts
 * The proxy will intercept all get requests and add all BuildEffects from BuildAffectingObjects.
 * e.g if build.race.languages.inherent = [Language.Orc, Language.Goblin] then a call to build.languages will be intercepted by the proxy
 * and the race BuildEffect will add both Orc and Goblin to build.languages.
 *
 *              Action impacts
 * Actions can modify a build with BuildEffects. When these effects have a duration of affect they are
 * IterimBuildEffects. The game engine will apply these effects at the startTime and unapply at the end of the duration.
 * Any IterimBuildEffects that start at 0 will be applied by the ActionRunner.
 * All others will be applied by the game engine which will also updated the IterimBuildEffect to reflect the passing of time units.
 * e.g. a target is hit with a sword that poisons it for 3 rounds. 
 * IterimBuildEffect({
 *  name: "posioned by sword hit from ____",
 *  modifyingProperty: "conditions",
 *  operation: BuildEffectOperation.Push,
 *  value: "Poisoned",
 *  start: {type: Turn, num: 0},
 *  duration: {type: Round, num: 3}
 * })
 * 
 */
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
    buildEffects: BuildEffect[] = [];

    // calcualable properties
    darkVision: number = 0;
    speed: number = 0;
    proficiencyBonus: number = 0;
    savingThrow: { [key in AbilityEnum]: boolean } = defaultSavingThrow;
    armorClass: number = 10;
    // allows each piece of equipment to dictate what you can do
    actions: Action[] = []// do x with y 


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


    /**
     * Evaluate both condition and value of BuildEffects as this is where
     * eval has access to both Build and BuildAffectingObject
     * @param obj the BuildAffectingObject that contains the BuildEffects that 
     *  should be applied to the build.
     */
    public addModification(obj: BuildAffectingObject): void {
        let build = this;
        if (obj && obj.mod) {
            let effects = new Array<BuildEffect>();
            // run eval when there is access to the BAO and build
            for (let index = 0; index < obj.mod.length; index++) {
                let be = propertyCopy(obj.mod[index]);
                if (be.condition != null) {
                    console.log(`outside condition: ${be.condition}`);
                    checkExpression(be.condition);
                    be.condition = eval(be.condition);
                } else {
                    be.condition = true;    // default condition is true to run the BE
                }
                
                if (be.value != null) {
                    console.log(`outside Value: ${be.value}`);
                    checkExpression(be.value);
                    be.value = eval(be.value);
                }
                effects.push(be);
            }
            this.modifications = [...this.modifications, ...effects];
        }
    }

    /**
     * 
     * @param objs grouping of BAOs to be applied to build.
     */
    public addModifications(objs: BuildAffectingObject[]): void {
        if (objs) {
            objs.forEach((obj: BuildAffectingObject) => {
                this.addModification(obj);
            });
        }
    }

    public getAbilityModifier(ability: AbilityObject): number {
        return Math.floor((this.ability[ability.key] - 10) / 2);
    }
     
    // used to prevent looping when using getters within effects.
    takeBase: boolean = false;
    modifications: Array<BuildEffect> = [];
}
