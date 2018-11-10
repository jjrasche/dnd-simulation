import { TestBed } from '@angular/core/testing';

import { ActionService } from './action.service';
import { Class } from '../enum/class.enum';
import { Build } from '../models/build.model';


describe('ActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionService = TestBed.get(ActionService);
    expect(service).toBeTruthy();
  });

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
