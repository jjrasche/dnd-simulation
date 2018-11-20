import { TestBed } from '@angular/core/testing';

import { ActionService } from './action.service';

describe('ActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionService = TestBed.get(ActionService);
    expect(service).toBeTruthy();
  });

  // availableSpellActions(initiator Build, currentState Build) return all Spell Actions available
  // availableAttackActions(initiator Build, currentState Build) return all Spell Actions available

  // possibleActions(initiator Build, target Build, env Environment, previousActions Action[]) returns set of possible actions
  /**
   * Attack
   * can use any weapons on build
   * can always attack with bare hands
   * Spell
   * use any spells in  
   */
  // possibleActions invalid input throws exception
  // possibleActions 
  // possibleActions 
  // possibleActions 
});
