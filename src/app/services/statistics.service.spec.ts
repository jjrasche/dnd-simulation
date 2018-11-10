import { TestBed } from '@angular/core/testing';

import { StatisticsService } from './statistics.service';
import { Die } from '../enum/die.enum';

describe('StatisticsService', () => {
  let service: StatisticsService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(StatisticsService);
  });

  // given an outcome and set of possibilities, return a probability
  it("probability invalid inputs probability(numDesiredOutcomes, numTotalOutcomes);", () => {
    expect(service.probability(null, null)).toThrow();
  });

  it("probability divide by 0 probability(numDesiredOutcomes, numTotalOutcomes);", () => {
    expect(service.probability(1, 0)).toThrow();
  });

  it("probability negative numbers not allowed probability(numDesiredOutcomes, numTotalOutcomes);", () => {
    expect(service.probability(-1, 2)).toThrow();
  });

  it("throw error when probabilities are out of range of 0-1 probability(numDesiredOutcomes, numTotalOutcomes);", () => {
    expect(service.probability(5, 1)).toThrow();
  });

  it("edge case probabilities can be 0 (will not happen)", () => {
    let actual = service.probability(0, 1); 
    expect(actual).toEqual(0);
  });

  it("happy path 10 desired outcomes out of 20 total outcumes probability(numDesiredOutcomes, numTotalOutcomes);", () => {
    let actual = service.probability(10, 20); 
    expect(actual).toEqual(.5);
  });

  it("average null averageOutcome(die)", () => {
    expect(service.average(null)).toThrow();
  });
  
  it("average d8  averageOutcome(die)", () => {
    let actual = service.average(Die.D8)
    expect(actual).toEqual(4.5);
  });
});
