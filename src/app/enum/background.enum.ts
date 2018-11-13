import { Build } from "../models/build.model";
import { SkillObject, Skill } from "./skill.enum";
import { settings, BuildAffectingObject } from "../models/common";

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

export class BackgroundObject implements BuildAffectingObject {
    description: string;
    skill: settings<SkillObject>;

    // default effect without any alteration
    effect(b: Build): void {
        // apply proficiency bonus
        let origVale = b.skill;
        this.skill.inherent.forEach(skill => {
            b.skill[skill.enum] = true;
        });
        console.log(`value was '${JSON.stringify(origVale)}' now '${JSON.stringify(b.skill)}'`);
    };
}

export const Background: { [key in BackgroundEnum]: BackgroundObject } = {
    Acolyte: {
        description: "",
        skill: { inherent: [Skill.Insight, Skill.Religion], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Charlatan: {
        description: "",
        skill: { inherent: [Skill.Deception, Skill.SleightOfHand], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Criminal: {
        description: "",
        skill: { inherent: [Skill.Deception, Skill.Stealth], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Entertainer: {
        description: "",
        skill: { inherent: [Skill.Acrobatics, Skill.Performance], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Folk: {
        description: "",
        skill: { inherent: [Skill.AnimalHandling, Skill.Survival], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Guild: {
        description: "",
        skill: { inherent: [Skill.Insight, Skill.Persuasion], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Hermit: {
        description: "",
        skill: { inherent: [Skill.Medicine, Skill.Religion], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Noble: {
        description: "",
        skill: { inherent: [Skill.History, Skill.Persuasion], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Outlander: {
        description: "",
        skill: { inherent: [Skill.Athletics, Skill.Survival], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Sage: {
        description: "",
        skill: { inherent: [Skill.Arcana, Skill.History], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Sailor: {
        description: "",
        skill: { inherent: [Skill.Athletics, Skill.Perception], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Soldier: {
        description: "",
        skill: { inherent: [Skill.Athletics, Skill.Intimidation], selectable: null },
        effect: BackgroundObject.prototype.effect,
    },
    Urchin: {
        description: "",
        skill: { inherent: [Skill.SleightOfHand, Skill.Stealth], selectable: null },
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