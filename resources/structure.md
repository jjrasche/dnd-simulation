# Structure

## Build
Allows users to choose options in a character build
- A UI displays choices and options
- Rules engine determining what choices are possible

## Tactics
A model for deciding which action a build will take given a specific scenario
- Inputs: initiator Build, env Environment
- Output: action Action = a particular decision the character makes, may want to limit this to Attack actions for now 

## Action
### Analysis
Rules engine determining what actions are possible. Given
- Inputs: initiator Build, target Build, env Environment, previousActions Action[]
    - may want to limit this to initiator and previousActions to simplify this for now
- Output: availableActions Action[]
### Effect
Handles execution of an action
- Inputs: initiator Build, target Build[], action Action
- Output: ActionResult = a buildDiff[] changes to the initiator or opponents because of the action

## Statistics & Roll Services
Provides call to low level statisticall methods
- Dice roll probabilities
- Damage averages
- Roll outcomes

## Encounter
Reflects an interaction between two or more builds
- Inputs: GroupA Build[], GroupB Build[], env Environment
- Output: EncounterResult = a list of Actions taken by alll characters and summary of the acumulated effect
- Local: actions Action[], envDiff changes to the environment per round
