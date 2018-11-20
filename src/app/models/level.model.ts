import { BaseBuildAffectingConstructor, BaseBuildAffectingObject, BuildEffect } from "./build.object";
import { Build } from "./build.model";
import { LevelEnum } from "../enum/level.enum";

// enfore object type
interface ILevelObject {
    proficiencyBonus: number;
}
type LevelConstructor = ILevelObject & BaseBuildAffectingConstructor;

export class LevelObject extends BaseBuildAffectingObject {
    proficiencyBonus: number;

    constructor(obj: LevelConstructor) {
        // set base properties
        super(obj);
        // Set Object level properties.
        this.proficiencyBonus = obj.proficiencyBonus;
        
        // Add generic level effects.
        let be = new BuildEffect("level", "proficiencyBonus", (b: Build) => b.proficiencyBonus = this.proficiencyBonus);
        this.mod.push(be);
    }
}

export const Level: { [key in LevelEnum]: LevelObject } = {
    One: new LevelObject({ 
        description: "The first characte level.",
        proficiencyBonus: 2,
    }),
    Two: new LevelObject({ 
        description: "The second characte level.",
        proficiencyBonus: 2,
    }),
    Three: new LevelObject({ 
        description: "The third characte level.",
        proficiencyBonus: 2,
    }),
    Four: new LevelObject({ 
        description: "The fourth characte level.",
        proficiencyBonus: 2,
    }),
    Five: new LevelObject({ 
        description: "The fifth characte level.",
        proficiencyBonus: 3,
    }),
    Six: new LevelObject({ 
        description: "The sizth characte level.",
        proficiencyBonus: 3,
    }),
    Seven: new LevelObject({ 
        description: "The seventh characte level.",
        proficiencyBonus: 3,
    }),
    Eight: new LevelObject({ 
        description: "The eighth characte level.",
        proficiencyBonus: 3,
    }),
    Nine: new LevelObject({ 
        description: "The nineth characte level.",
        proficiencyBonus: 4,
    }),
    Ten: new LevelObject({ 
        description: "The tenth characte level.",
        proficiencyBonus: 4,
    }),
    Eleven: new LevelObject({ 
        description: "The eleventh characte level.",
        proficiencyBonus: 4,
    }),
    Twelve: new LevelObject({ 
        description: "The twelfth characte level.",
        proficiencyBonus: 4,
    }),
    Thirteen: new LevelObject({ 
        description: "The thirteenth characte level.",
        proficiencyBonus: 5,
    }),
    Fourteen: new LevelObject({ 
        description: "The fourteenth characte level.",
        proficiencyBonus: 5,
    }),
    Fifteen: new LevelObject({ 
        description: "The fifteenth characte level.",
        proficiencyBonus: 5,
    }),
    Sixteen: new LevelObject({ 
        description: "The sixteenth characte level.",
        proficiencyBonus: 5,
    }),
    Seventeen: new LevelObject({ 
        description: "The seventeenth characte level.",
        proficiencyBonus: 6,
    }),
    Eighteen: new LevelObject({ 
        description: "The eighteenth characte level.",
        proficiencyBonus: 6,
    }),
    NineTeen: new LevelObject({ 
        description: "The nineTeenth characte level.",
        proficiencyBonus: 6,
    }),
    Twenty: new LevelObject({ 
        description: "The Twenty characte level.",
        proficiencyBonus: 6,
    }),
}
