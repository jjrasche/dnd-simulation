import { Injectable } from '@angular/core';
import { Die } from '../enum/die.enum';
import { checkReturnNotWithinLimit, checkNullInputs, checkDivideByZero } from '../models/common';

/**
 * Statistical helper service returning averages and probabilities
 */
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor() { }

  /**
   * @param numDesiredOutcomes 
   * @param numTotalOutcomes 
   * @returns a decimal number representing the probability the 
   *  desired outocme will happen out of total outcomes.
   */
  public probability(numDesiredOutcomes: number, numTotalOutcomes: number): number {
    checkNullInputs("probability", numDesiredOutcomes, numTotalOutcomes);
    checkDivideByZero("probability", "numTotalOutcomes", numTotalOutcomes);

    const probability = numDesiredOutcomes / numTotalOutcomes;
    return checkReturnNotWithinLimit("probability", 0, 1, probability);
  }

  /**
   * @param die 
   * @returns a number representing the average numerical outcome or rolling a die.
   */
  public average(die: number): number {
    checkNullInputs("probability", die);

    const numSides: number = die;
    const summationOfSides: number = numSides * (numSides + 1) / 2;
    
    return summationOfSides / numSides;
  }
}
