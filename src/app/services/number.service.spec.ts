import { TestBed } from '@angular/core/testing';

import { NumberService } from './number.service';

describe('NumberService', () => {
  let service: NumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(NumberService);
  });

  it('randomNumberBetween, given null inputs, will throw ', () => {
    expect(() => service.randomNumberBetween(null, null)).toThrow();
    expect(() =>service.randomNumberBetween(undefined, undefined)).toThrow();
  });

  it('randomNumberBetween, given first input >= second input, will throw ', () => {
    expect(() => service.randomNumberBetween(2, 1)).toThrow();
    expect(() => service.randomNumberBetween(2, 2)).toThrow();
  });

  it('randomNumberBetween, happy path', () => {
    let actual = service.randomNumberBetween(1,2);
    expect(actual).toEqual(jasmine.any(Number))
  });
});
