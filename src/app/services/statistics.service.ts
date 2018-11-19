import { Injectable } from '@angular/core';
import { InputCheckService } from './input-check.service';

/**
 * Statistical helper service returning averages and probabilities
 */
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private inputService: InputCheckService,
  ) { }

  /**
   * @param numDesiredOutcomes 
   * @param numTotalOutcomes 
   * @returns a decimal number representing the probability the 
   *  desired outocme will happen out of total outcomes.
   */
  public probability(numDesiredOutcomes: number, numTotalOutcomes: number): number {
    this.inputService.checkNullInputs("probability", numDesiredOutcomes, numTotalOutcomes);
    this.inputService.checkDivideByZero("probability", "numTotalOutcomes", numTotalOutcomes);

    const probability = numDesiredOutcomes / numTotalOutcomes;
    return this.inputService.checkReturnNotWithinLimit("probability", 0, 1, probability);
  }

  /**
   * @param die 
   * @returns a number representing the average numerical outcome or rolling a die.
   */
  public average(die: number): number {
    this.inputService.checkNullInputs("probability", die);

    const numSides: number = die;
    const summationOfSides: number = numSides * (numSides + 1) / 2;
    
    return summationOfSides / numSides;
  }
}
