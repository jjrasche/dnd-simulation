import { BuildAffectingObject } from "../models/common";
import { Build } from "../models/build.model";

export enum LevelEnum {
    One = "One",
    Two = "Two",
    Three = "Three",
    Four = "Four",
    Five = "Five",
    Six = "Six",
    Seven = "Seven",
    Eight = "Eight",
    Nine = "Nine",
    Ten = "Ten",
    Eleven = "Eleven",
    Twelve = "Twelve",
    Thirteen = "Thirteen",
    Fourteen = "Fourteen",
    Fifteen = "Fifteen",
    Sixteen = "Sixteen",
    Seventeen = "Seventeen",
    Eighteen = "Eighteen",
    NineTeen = "NineTeen",
    Twenty = "Twenty",
}

export class LevelObject implements BuildAffectingObject  {
    proficiencyBonus: number;

    effect(b: Build): void {
        if (this.proficiencyBonus) {
            b.proficiencyBonus = this.proficiencyBonus;
        }
    };
}

export const Level: { [key in LevelEnum]: LevelObject } = {
    One: { proficiencyBonus: 2, effect: LevelObject.prototype.effect },
    Two: { proficiencyBonus: 2, effect: LevelObject.prototype.effect },
    Three: { proficiencyBonus: 2, effect: LevelObject.prototype.effect },
    Four: { proficiencyBonus: 2, effect: LevelObject.prototype.effect },
    Five: { proficiencyBonus: 3, effect: LevelObject.prototype.effect },
    Six: { proficiencyBonus: 3, effect: LevelObject.prototype.effect },
    Seven: { proficiencyBonus: 3, effect: LevelObject.prototype.effect },
    Eight: { proficiencyBonus: 3, effect: LevelObject.prototype.effect },
    Nine: { proficiencyBonus: 4, effect: LevelObject.prototype.effect },
    Ten: { proficiencyBonus: 4, effect: LevelObject.prototype.effect },
    Eleven: { proficiencyBonus: 4, effect: LevelObject.prototype.effect },
    Twelve: { proficiencyBonus: 4, effect: LevelObject.prototype.effect },
    Thirteen: { proficiencyBonus: 5, effect: LevelObject.prototype.effect },
    Fourteen: { proficiencyBonus: 5, effect: LevelObject.prototype.effect },
    Fifteen: { proficiencyBonus: 5, effect: LevelObject.prototype.effect },
    Sixteen: { proficiencyBonus: 5, effect: LevelObject.prototype.effect },
    Seventeen: { proficiencyBonus: 6, effect: LevelObject.prototype.effect },
    Eighteen: { proficiencyBonus: 6, effect: LevelObject.prototype.effect },
    NineTeen: { proficiencyBonus: 6, effect: LevelObject.prototype.effect },
    Twenty: { proficiencyBonus: 6, effect: LevelObject.prototype.effect },
}
