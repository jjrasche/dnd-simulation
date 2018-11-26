import { Build } from "./build.model";
import { BaseBuildAffectingConstructor, BuildEffect, BaseBuildAffectingObject } from "./build.object";
import { ConditionEnum } from "../enum/condition.enum";

export class ConditionObject extends BaseBuildAffectingObject {
    constructor(obj: BaseBuildAffectingConstructor) {
        super(obj);
    }
}

export const Condition: { [key in ConditionEnum]: ConditionObject } = {
    Blinded: new ConditionObject({
        description: "A blinded creature can’t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage." ,
    }),
    Charmed: new ConditionObject({
        description: "A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature." ,
    }),
    Deafened: new ConditionObject({
        description: "A deafened creature can’t hear and automatically fails any ability check that requires hearing." ,
    }),
    Frightened: new ConditionObject({
        description: "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can’t willingly move closer to the source of its fear." ,
    }),
    Grappled: new ConditionObject({
        description: "A grappled creature’s speed becom es 0, and it can't benefit from any bonus to its speed. The condition ends if the grappler is incapacitated (see the condition). The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell." ,
    }),
    Incapacitated: new ConditionObject({
        description: "An incapacitated creature can’t take actions or reactions." ,
    }),
    Invisible: new ConditionObject({
        description: "An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The crea­ ture’s location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature’s attack rolls have advantage." ,
    }),
    Paralyzed: new ConditionObject({
        description: "A paralyzed creature is incapacitated (see the condi­ tion) and can’t move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature." ,
    }),
    Petrified: new ConditionObject({
        description: "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized." ,
    }),
    Exhaustion1: new ConditionObject({
        description: "Disadvantage on ability checks. Finishing a long rest reduces a creature's exhaustion level by 1, provided that the creature has also ingested some food and drink.." ,
    }),
    Exhaustion2: new ConditionObject({
        description: "Speed halved." ,
    }),
    Exhaustion3: new ConditionObject({
        description: "Disadvantage on attack rolls and saving throws ." ,
    }),
    Exhaustion4: new ConditionObject({
        description: "Hit point maximum halved." ,
    }),
    Exhaustion5: new ConditionObject({
        description: "Speed reduced to 0." ,
    }),
    Exhaustion6: new ConditionObject({
        description: "Death." ,
    }),
    Poisoned: new ConditionObject({
        description: "A poisoned creature has disadvantage on attack rolls and ability checks." ,
    }),
    Prone: new ConditionObject({
        description: "A prone creature’s only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage." ,
    }),
    Restrained: new ConditionObject({
        description: "A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws." ,
    }),
    Stunned: new ConditionObject({
        description: "A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage." ,
    }),
    Unconscious: new ConditionObject({
        description: "An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a criti­cal hit if the attacker is within 5 feet of the creature." ,
    }),

}
