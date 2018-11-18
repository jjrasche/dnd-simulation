import { Injectable } from '@angular/core';
import { Die } from '../enum/die.enum';
import { RollOperation } from '../enum/roll-operation.enum';

/**
 * Provide functionality to emulate a dice rolle. 
 * Can return either statistical outcomes or random discrete outcomes
 */
@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor() { }

  public roll(die: Die, operation: RollOperation, desiredRoll: number): number {
    return null;
  }

  // attack rolls only use greater than or equal to operation.
  public rollAttackProbability(die: Die, desiredRoll: number): number {
    return null;
  }

  // attack rolls only use greater than or equal to operation.
  public rollDamageAverage(die: Die): number {
    return null;
  }
}
