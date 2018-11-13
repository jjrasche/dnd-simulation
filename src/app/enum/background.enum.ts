import { AffectingObject } from "../models/action.model";
import { Build } from "../models/build.model";
import { SkillObject, Skill } from "./skill.enum";
import { settings } from "../models/common";

export enum BackgroundEnum {
    Acolyte = "Acolyte",
    Charlatan = "Charlatan",
    Criminal = "Criminal",
    Entertainer = "Entertainer",
    Folk = "Folk",
    Guild = "Guild",
    Hermit = "Hermit",
    Noble = "Noble",
    Outlander = "Outlander",
    Sage = "Sage",
    Sailor = "Sailor",
    Soldier = "Soldier",
    Urchin = "Urchin",
}

export class BackgroundObject implements AffectingObject<Build> {
    description: string;
    skill: settings<SkillObject>;

    // default effect without any alteration
    effect(b: Build): void {
        // apply proficiency bonus
        let origVale = b.skill;
        this.skill.inherint.forEach(skill => {
            b.skill[skill.enum] = true;
        });
        console.log(`value was '${JSON.stringify(origVale)}' now '${JSON.stringify(b.skill)}'`);
    };
}

export const Background: { [key in BackgroundEnum]: BackgroundObject } = {
    Acolyte: {
        description: "",
        skill: { inherint: [Skill.Insight, Skill.Religion], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Charlatan: {
        description: "",
        skill: { inherint: [Skill.Deception, Skill.SleightOfHand], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Criminal: {
        description: "",
        skill: { inherint: [Skill.Deception, Skill.Stealth], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Entertainer: {
        description: "",
        skill: { inherint: [Skill.Acrobatics, Skill.Performance], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Folk: {
        description: "",
        skill: { inherint: [Skill.AnimalHandling, Skill.Survival], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Guild: {
        description: "",
        skill: { inherint: [Skill.Insight, Skill.Persuasion], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Hermit: {
        description: "",
        skill: { inherint: [Skill.Medicine, Skill.Religion], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Noble: {
        description: "",
        skill: { inherint: [Skill.History, Skill.Persuasion], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Outlander: {
        description: "",
        skill: { inherint: [Skill.Athletics, Skill.Survival], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Sage: {
        description: "",
        skill: { inherint: [Skill.Arcana, Skill.History], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Sailor: {
        description: "",
        skill: { inherint: [Skill.Athletics, Skill.Perception], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Soldier: {
        description: "",
        skill: { inherint: [Skill.Athletics, Skill.Intimidation], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Urchin: {
        description: "",
        skill: { inherint: [Skill.SleightOfHand, Skill.Stealth], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
}

export function getEnumFromObject(obj: BackgroundObject): BackgroundEnum {
    return Object.keys(Background).find((key: BackgroundEnum) => obj === Background[key]) as BackgroundEnum;
}

export class Factory<T> {
    constructor(private type: new () => T) { }

    getNew(): T {
        return new this.type();
    }
}  