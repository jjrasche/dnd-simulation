# Structure

## Build
Allows for chosing options in a character build
- View portion displaying choices and options
- Rules engine determining what choices are possible

## Tactics
A model for deciding which action a build will take given a specific scenario
- Inputs: charcter Build, env Environment
- Output: action Action = a particular decision the character makes, may want to limit this to fighting options for now 

## Action
### Analysis
Rules engine determining what actions are possible. Given
- Inputs: character Build, previousActions Action[]
- Output: availableActions Action[]
### Effect
Handles execution of an action
- Inputs: initiator Build, target Build[], action Action
- Output: ActionResult = a buildDiff[] changes to the initiator or opponents because of the action

## Statistics & Roll Services
Provides call to low level statisticall methods
- Dice roll probabilities
- Damage averages

## Encounter
Reflects an interaction between two or more builds
- Inputs: GroupA Build[], GroupB Build[], env Environment
- Output: EncounterResult = a list of Actions taken by alll characters and summary of the acumulated effect
- Local: actions Action[], envDiff changes to the environment per round
