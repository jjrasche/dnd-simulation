import { TestBed } from '@angular/core/testing';

import { StatisticsService } from './statistics.service';

describe('StatisticsService', () => {
  let service: StatisticsService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(StatisticsService);
  });

  // given an outcome and set of possibilities, return a probability
  it("probability, given invalid inputs will throw", () => { 
    expect(() => service.probability(null, null)).toThrow();
    expect(() => service.probability(undefined, undefined)).toThrow();
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
    expect(service.average(3)).toEqual(2);
    expect(service.average(9)).toEqual(5);
  });
});
