import { ActionType } from "../enum/action-type.enum";
import { Build } from "./build.model";

/**
 * bonus actions
 * - start rage (barbarian)
 * - stop rage (barbarian)
 * - frenzy (barbarian): can melee attack on bonus action
 * - Eagle (barbarian): dash on bonus action
 * - bardic inspiration (bard): one creature is inspired
 * - master of nature (cleric): commannd charmed creatures
 * - invoke duplicity (cleric): move illusion 30 feet 
 * - war priest (cleric): one weapon attack
 * - beast shape (druid): revert to normal form
 * - second wind (fighter): heal self
 * - action surge (fighter): take additional action
 * - commander's strike (fighter): allow another player to make an attack 
 */

/**
 *   concept of dynamic actions
 * 
apply poison to arrow:
- name: "apply poison"
- inputs:
    - e: choose equipment to apply to, (if e != arrows --> n = 3)
    - n: (0 < n < 4) choose number of applications
- attempt: true // auto succeeds
- effects: ActionEffect[] = [
    {
        type: immediate,
        description: "applying poison"
        success: BuildEffect[] = [
            // could add / remove equipment
            BuildEffect({initiator:"applyPoison", property:"equipment[e].quantity", operation: BuildOperation.Subtract, amount: n),
            BuildEffect({initiator:"applyPoison", property:"equipment['Poison' + e].quantity", operation: BuildOperation.Add, amount: n)

            // or add modifier to the equipment
            BuildEffect({initiator:"applyPoison", property:"equipment[e].modifier", operation: BuildOperation.add, amount: {type: poison, duration: 1}),
        ]
        failure: BuildEffect[] = []
        finally: BuildEffect[] = [
            BuildEffect({initiator:"applyPoison", property:"equipment[PoisonVial].quantity", operation: BuildOperation.Subtract, amount: n),
        ]
    },
    {
        type: afterDuration,
        description: "poison evaporates"
        success: BuildEffect[] = [
            BuildEffect({initiator:"poison dissipates", property:"equipment['Poison' + e].quantity", operation: BuildOperation.Add, amount: n)
            BuildEffect({initiator:"poison dissipates", property:"equipment[e].quantity", operation: BuildOperation.Subtract, amount: n),
        ]
        failure: BuildEffect[] = []
        finally: BuildEffect[] = []
    }
]

 */


type Effect = BuildEffect;// | EnvironmentEffect;
/**
 * An object may have one or more action(s) that can be taken with them.
 * e.g. a sword allows you to hit a target with it. Those actions and the
 * behavior to bring about their effect is layed out in this class.
 * 
 * @param name is the descriptor of the action e.g. "apply poison".
 * @param inputs a list of all choices that must be made to take this action.
 * @param attempt is the means by which success or failure are determine e.g. (target: Build, die: Die) => target.armorClass <= rollService.roll(die).
 * @param effects the impacts from the action.
 */
export class Action {
    name: string;
    initiator: Build;
    inputs: Input[];
    attempt: (...args) => boolean;
    effects: ActionEffect[];
}

/**
 * An input represents a decision that must be made before moving forward.
 * 
 * @param description textual aid describing what this input is for.
 * @param name of variable used to interact with value of this input.
 * @param type sets what the input is expected to be e.g. a number, a selection from a dropdown.
 * @param default the initial value this input will be set to.
 */
export class Input {
    description: string;
    name: string;
    type: number | string | Selection;
    default?: any;
}

/**
 * The impact an action has.
 * 
 * @param name a deeper description of what this single action effect is doing 
 *      e.g. Action.name = "apply poison" Action.effedcts[0].name = "poison evaporated".
 * @param duration 
 *  - immediate
 *  - after duration
 *  - for duration
 *  - permenant
 *  - triggered  -->  when ___ event happens on ____ then this ends  e.g. when caster loses concentration
 * @param success what happens when the action succeeds.
 * @param failure what happens when the action fails.
 * @param finally impacts that will inevitably happen when the action is taken.
 */
export class ActionEffect {
    name: string;
    duration: ActionType;
    success: Effect[];
    failure: Effect[];
    finally: Effect[];
}

// every change to a build property is an effect
// need to be able to add objects to a build e.g. push modifier into equipment.modifier
/**
 * The only way to modify a property on a build. When a build affect is invoked
 */
export class BuildEffect {
    initiator: string; // who/what/why the effect started
    property: string; // the property accessible through Build["property"]
    operation: string; // ???type of operation performed on build property e.g. takeLower, subtract
    amount: number
}


// where do things like immunity come into play?
/**
 * I take an action that succeeds and does 1d10 fire damage
 * - build effect invoked
 * the target is immune to fire damage
 * 
 * should the effect be aware of its type and the impact
 * 
 * what carries out the effect... some action runner.
 * the action runner takes effects and targets and runs the scenario
 * how to make action runner rules dynamic e.g. 
 *  - AttemptType.AttackRoll = roll a d20 and compare target AC
 *  - cleave rule = do damage to other creatures in range if you kill your target
 * 
 * 
 * ActionRunner
 *  - gather inputs
 *  - determine success/failure
 *  - run build affects 
 * 
 * 
 * 
 * 
 *        
 * 
    A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. 
    Each creature in the cylinder must make a dexterity saving throw. 
    A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one. 
    Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.",

    choices: where --> (targets, env location), level
export class Input {
    type: number | string | Array<Build>;
    description: string;
    default?: any;
}

    class Action {
        name: string;
        initiator: Build;
        inputs: Input[];
        attempt: (...args) => boolean;
        effects: ActionEffect[];
    }
    Action({
        name: "Ice Storm",
        initiator: 
        inputs: [
            Input({
                description: "select targets",   // there might be another layer between the actionrunner and the environment. coordinateLocation --> targets, envArea
                name: 
                type: Array<Build>,
            }),
            Input({
                description: "select area of the environment affected",
            })
        ]
    })


 */