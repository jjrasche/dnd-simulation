import { Build } from "./build.model";
import { SkillObject, Skill } from "./skill.model";
import { BaseObject } from "./base.object";
import { BuildAffectingObject, applyToBuild } from "./build.object";
import { settings } from "./setting.model";
import { BackgroundEnum } from "../enum/background.enum";

export class BackgroundObject implements BaseObject, BuildAffectingObject {
    description: string;
    skill: settings<SkillObject>;

    // default effect without any alteration
    effect(b: Build): void {
        applyToBuild(() => this.skill.inherent, k => b.skill[k] = true);
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
