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

export interface LevelObject {
    proficiencyBonus: number
}

export const Level: { [key in LevelEnum]: LevelObject } = {
    One: { proficiencyBonus: 2 },
    Two: { proficiencyBonus: 2 },
    Three: { proficiencyBonus: 2 },
    Four: { proficiencyBonus: 2 },
    Five: { proficiencyBonus: 3 },
    Six: { proficiencyBonus: 3 },
    Seven: { proficiencyBonus: 3 },
    Eight: { proficiencyBonus: 3 },
    Nine: { proficiencyBonus: 4 },
    Ten: { proficiencyBonus: 4 },
    Eleven: { proficiencyBonus: 4 },
    Twelve: { proficiencyBonus: 4 },
    Thirteen: { proficiencyBonus: 5 },
    Fourteen: { proficiencyBonus: 5 },
    Fifteen: { proficiencyBonus: 5 },
    Sixteen: { proficiencyBonus: 5 },
    Seventeen: { proficiencyBonus: 6 },
    Eighteen: { proficiencyBonus: 6 },
    NineTeen: { proficiencyBonus: 6 },
    Twenty: { proficiencyBonus: 6 },
}
