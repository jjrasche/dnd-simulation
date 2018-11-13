import { Skill, SkillObject } from "./skill.enum";

// Limits the possible Classes to the ones listed below and allows for type safety.
export enum ClassEnum {
    Barbarian = "Barbarian",
    Bard = "Bard",
    Cleric = "Cleric",
    Druid = "Druid",
    Fighter = "Fighter",
    Paladin = "Paladin",
    Ranger = "Ranger",
    Rogue = "Rogue",
    Sorcerer = "Sorcerer",
    Warlock = "Warlock",
    Wizard = "Wizard"
};

// Enforces form of return object from so you can do `Class.Bard.numSkills`
export interface ClassObject {
    skillOptions: Array<SkillObject>;
    numSkills: number;
};

/**
 * Stores object data b/c Enum can't store objects directly.
 * Limits usage of Classes to only those specified in ClassEnum.
 * Class.Bard (good) Class.Fairy (fails)
 */
export const Class: { [key in ClassEnum]: ClassObject } = {
    Barbarian: { skillOptions: [Skill.AnimalHandling, Skill.Athletics, Skill.Intimidation, Skill.Nature, Skill.Perception, Skill.Survival], numSkills: 2 },
    Bard: { skillOptions: [Skill.Athletics, Skill.Acrobatics, Skill.SleightOfHand, Skill.Stealth, Skill.Arcana, Skill.History, Skill.Investigation, Skill.Nature, Skill.Religion, Skill.AnimalHandling, Skill.Insight, Skill.Medicine, Skill.Perception, Skill.Survival, Skill.Deception, Skill.Intimidation, Skill.Performance, Skill.Persuasion], numSkills: 3 },
    Cleric: { skillOptions: [Skill.History, Skill.Insight, Skill.Medicine, Skill.Persuasion, Skill.Religion], numSkills: 2 },
    Druid: { skillOptions: [Skill.Acrobatics, Skill.AnimalHandling, Skill.Athletics, Skill.History, Skill.Insight, Skill.Intimidation, Skill.Perception, Skill.Survival], numSkills: 2 },
    Fighter: { skillOptions: [Skill.Acrobatics, Skill.Athletics, Skill.History, Skill.Insight, Skill.Religion, Skill.Stealth], numSkills: 2 },
    Paladin: { skillOptions: [Skill.Athletics, Skill.Insight, Skill.Intimidation, Skill.Medicine, Skill.Persuasion, Skill.Religion], numSkills: 2 },
    Ranger: { skillOptions: [Skill.AnimalHandling, Skill.Athletics, Skill.Insight, Skill.Investigation, Skill.Nature, Skill.Perception, Skill.Stealth, Skill.Survival], numSkills: 3 },
    Rogue: { skillOptions: [Skill.Acrobatics, Skill.Athletics, Skill.Deception, Skill.Insight, Skill.Intimidation, Skill.Investigation, Skill.Perception, Skill.Performance, Skill.Persuasion, Skill.SleightOfHand, Skill.Stealth], numSkills: 4 },
    Sorcerer: { skillOptions: [Skill.Arcana, Skill.Deception, Skill.Insight, Skill.Intimidation, Skill.Persuasion, Skill.Religion], numSkills: 2 },
    Warlock: { skillOptions: [Skill.Arcana, Skill.Deception, Skill.History, Skill.Intimidation, Skill.Investigation, Skill.Nature, Skill.Religion], numSkills: 2 },
    Wizard: { skillOptions: [Skill.Arcana, Skill.History, Skill.Insight, Skill.Investigation, Skill.Medicine, Skill.Religion], numSkills: 2 },
};