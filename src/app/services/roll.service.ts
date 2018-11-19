import { Injectable } from '@angular/core';
import { Die } from '../enum/die.enum';
import { RollOperation } from '../enum/roll-operation.enum';
import { StatisticsService } from './statistics.service';
import { InputCheckService } from './input-check.service';
import { NumberService } from './number.service';

/**
 * Provide functionality to emulate a dice rolle. 
 * Can return either statistical outcomes or random discrete outcomes
 */
@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor(
    private statService: StatisticsService,
    private inputService: InputCheckService,
    private numService: NumberService,
    ) { }

  /**
   * Calculates statistical outcome of rolling a die.
   * @param die the die to be rolled.
   * @param operation the method for interprestting the success of a role.
   * @param desiredRoll the result of a roll that determines success.
   * 
   * @returns probability the roll will be successful.
   */
  public statisticalRoll(die: Die, operation: RollOperation, desiredRoll: number): number {
    this.inputService.checkNullInputs("statisticalRoll", die, operation, desiredRoll);
    this.inputService.checkInputsArePositiveNumbers("statisticalRoll", desiredRoll);

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

  /**
   * 
   * @param die being rolled.
   * @returns average amount of damage a die will produce.
   */
  public averageRoll(die: Die): number {
    this.inputService.checkNullInputs("averageRoll", die);
    return this.statService.average(die);
  }

  /**
   * Perform a roll with random probability 
   * @param die being rolled.
   */
  public roll(die: Die): number {
    this.inputService.checkNullInputs("roll", die);
    return this.numService.randomNumberBetween(1, die);
  }

  private rollPossible(die: Die, desiredRoll: number): boolean {
    return 1 <= desiredRoll && desiredRoll <= die;
  }

}
