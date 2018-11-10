export enum ConditionEnum {
    Blinded = "Blinded",
    Charmed = "Charmed",
    Deafened = "Deafened",
    Frightened = "Frightened",
    Grappled = "Grappled",
    Incapacitated = "Incapacitated",
    Invisible = "Invisible",
    Paralyzed = "Paralyzed",
    Petrified = "Petrified",
    Exhaustion1 = "Exhaustion1",
    Exhaustion2 = "Exhaustion2",
    Exhaustion3 = "Exhaustion3",
    Exhaustion4 = "Exhaustion4",
    Exhaustion5 = "Exhaustion5",
    Exhaustion6 = "Exhaustion6",
    Poisoned = "Poisoned",
    Prone = "Prone",
    Restrained = "Restrained",
    Stunned = "Stunned",
    Unconscious = "Unconscious"
}

export interface ConditionInfo {
    description: string;
}

export const Condition: { [key in ConditionEnum]: ConditionInfo } = {
    Blinded: { description: "A blinded creature can’t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage." },
    Charmed: { description: "A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature." },
    Deafened: { description: "A deafened creature can’t hear and automatically fails any ability check that requires hearing." },
    Frightened: { description: "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can’t willingly move closer to the source of its fear." },
    Grappled: { description: "A grappled creature’s speed becom es 0, and it can't benefit from any bonus to its speed. The condition ends if the grappler is incapacitated (see the condition). The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell." },
    Incapacitated: { description: "An incapacitated creature can’t take actions or reactions." },
    Invisible: { description: "An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The crea­ ture’s location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature’s attack rolls have advantage." },
    Paralyzed: { description: "A paralyzed creature is incapacitated (see the condi­ tion) and can’t move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature." },
    Petrified: { description: "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized." },
    Exhaustion1: { description: "Disadvantage on ability checks. Finishing a long rest reduces a creature's exhaustion level by 1, provided that the creature has also ingested some food and drink.." },
    Exhaustion2: { description: "Speed halved." },
    Exhaustion3: { description: "Disadvantage on attack rolls and saving throws ." },
    Exhaustion4: { description: "Hit point maximum halved." },
    Exhaustion5: { description: "Speed reduced to 0." },
    Exhaustion6: { description: "Death." },
    Poisoned: { description: "A poisoned creature has disadvantage on attack rolls and ability checks." },
    Prone: { description: "A prone creature’s only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage." },
    Restrained: { description: "A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws." },
    Stunned: { description: "A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage." },
    Unconscious: { description: "An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a criti­cal hit if the attacker is within 5 feet of the creature." },

}

export function findConditionEnumByConditionInfo(classInfo: ConditionInfo): ConditionEnum {
    let keys = Object.keys(Condition);
    for (let index = 0; index < keys.length; index++) {
        const conditionEnum = keys[index] as ConditionEnum;
        if (Condition[conditionEnum] === classInfo) {
            return conditionEnum;
        }
    }
    return null;
}
