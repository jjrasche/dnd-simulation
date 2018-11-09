import { Injectable } from '@angular/core';
import { Die } from '../enum/die.enum';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor() { }

  public probability(numDesiredOutcomes: number, numTotalOutcomes: number): number {
    return null;
  }

  // average roll equation is value of all faces added divided by number of faces
  public average(die: Die): number {
    return null;
  }
}
