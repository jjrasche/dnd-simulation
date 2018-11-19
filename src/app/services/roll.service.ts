import { Injectable } from '@angular/core';
import { Die } from '../enum/die.enum';
import { RollOperation } from '../enum/roll-operation.enum';
import { StatisticsService } from './statistics.service';
import { checkNullInputs, checkInputsArePositiveNumbers } from '../models/common';

/**
 * Provide functionality to emulate a dice rolle. 
 * Can return either statistical outcomes or random discrete outcomes
 */
@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor(public statService: StatisticsService) { }

  /**
   * Calculates statistical outcome of rolling a die
   * @param die the die to be rolled.
   * @param operation the method for interprestting the success of a role
   * @param desiredRoll the result of a roll that determines success.
   * 
   * @returns probability the roll will be successful.
   */
  public statisticalRoll(die: Die, operation: RollOperation, desiredRoll: number): number {
    checkNullInputs("statisticalRoll", die, operation, desiredRoll);
    checkInputsArePositiveNumbers("statisticalRoll", desiredRoll);

    let numSuccessfulOutcomes: number;
    switch(operation) {
      case RollOperation.Equal:
        numSuccessfulOutcomes = this.rollPossible(die, desiredRoll) ? 1 : 0;
        break;
      case RollOperation.GreaterThan:
        numSuccessfulOutcomes = this.rollPossible(die, desiredRoll) ? die - desiredRoll : 0;
        break
      case RollOperation.GreaterThanOrEqual:
        numSuccessfulOutcomes = this.rollPossible(die, desiredRoll) ? die - desiredRoll + 1 : 0;
        break;
      default:
        throw new Error(`Invalid operation '${operation}'`);
    }

    return this.statService.probability(numSuccessfulOutcomes, die);
  }

  private rollPossible(die: Die, desiredRoll: number): boolean {
    return 1 <= desiredRoll && desiredRoll <= die;
  }

  /**
   * 
   * @param die damage die being rolled
   * @returns average amount of damage a die will produce.
   */
  public averageRoll(die: Die): number {
    return this.statService.average(die);
  }
}
