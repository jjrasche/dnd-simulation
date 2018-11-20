import { Build } from "./build.model";
import { SkillObject, Skill } from "./skill.model";
import { applyToBuild, BaseBuildAffectingObject, BaseBuildAffectingConstructor, BuildEffect } from "./build.object";
import { settings } from "./setting.model";
import { BackgroundEnum } from "../enum/background.enum";

interface IBackgroundObject {
    skill: settings<SkillObject>;
}
type BackgroundConstructor = IBackgroundObject & BaseBuildAffectingConstructor;

export class BackgroundObject extends BaseBuildAffectingObject {
    skill: settings<SkillObject>;

    constructor(obj: BackgroundConstructor) {
        super(obj);
        this.skill = obj.skill;

        this.mod.push(new BuildEffect("background", "skills", (b: Build) => applyToBuild(() => this.skill.inherent, k => b.skill[k] = true)));
    }
}

export const Background: { [key in BackgroundEnum]: BackgroundObject } = {
    Acolyte: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Insight, Skill.Religion], selectable: null },
    }),
    Charlatan: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Deception, Skill.SleightOfHand], selectable: null },
    }),
    Criminal: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Deception, Skill.Stealth], selectable: null },
    }),
    Entertainer: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Acrobatics, Skill.Performance], selectable: null },
    }),
    Folk: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.AnimalHandling, Skill.Survival], selectable: null },
    }),
    Guild: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Insight, Skill.Persuasion], selectable: null },
    }),
    Hermit: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Medicine, Skill.Religion], selectable: null },
    }),
    Noble: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.History, Skill.Persuasion], selectable: null },
    }),
    Outlander: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Athletics, Skill.Survival], selectable: null },
    }),
    Sage: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Arcana, Skill.History], selectable: null },
    }),
    Sailor: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Athletics, Skill.Perception], selectable: null },
    }),
    Soldier: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.Athletics, Skill.Intimidation], selectable: null },
    }),
    Urchin: new BackgroundObject({
        description: "",
        skill: { inherent: [Skill.SleightOfHand, Skill.Stealth], selectable: null },
    }),
}
