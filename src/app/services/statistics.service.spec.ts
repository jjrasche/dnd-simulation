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
  it("probability, given null inputs will throw", () => { 
    expect(() => service.probability(null, null)).toThrow();
  });

  it("probability, given numTotalOutcomes is 0, will throw due to divide by 0", () => {
    expect(() => service.probability(1, 0)).toThrow();
  });

  it("probability, given an input with negative numbers, will throw due to output not [1, 0]", () => {
    expect(() => service.probability(-1, 2)).toThrow();
  });

  it("probability, given numDesiredOutcomes greater than numTotalOutcomes, will throw due to output not [1, 0]", () => {
    expect(() => service.probability(5, 1)).toThrow();
  });

  it("probability, given 0 desired outcomes, probabilities will be 0 (will not happen)", () => {
    let actual = service.probability(0, 1); 
    expect(actual).toEqual(0);
  });

  it("probability, happy path", () => {
    let actual = service.probability(10, 20); 
    expect(actual).toEqual(.5);
  });

  it("average, given invalid inputs, will throw", () => {
    expect(() => service.average(null)).toThrow();
  });
  
  it("average, happy path", () => {
    let actual = service.average(Die.D8)
    expect(actual).toEqual(4.5);
  });
});
