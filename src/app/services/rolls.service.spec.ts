import { TestBed } from '@angular/core/testing';

import { RollsService } from './rolls.service';
import { Die } from '../enum/die.enum';
import { RollOperation } from '../enum/roll-operation.enum';

describe('RollsService', () => {
  let service: RollsService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(RollsService);
  });

  it("roll invalid inputs throws invalid input exception", () => {
    expect(service.roll(null, null, null)).toThrow();
  });

  it("roll an 18 exactly on a d20", () => {
    let actual = service.roll(Die.D20, RollOperation.Equal, 18);
    expect(actual).toEqual(1/20);
  });

  it("roll an 21 exactly on a d20", () => {
    let actual = service.roll(Die.D20, RollOperation.Equal, 21);
    expect(actual).toEqual(0);
  });

  it("roll an 0 exactly on a d20", () => {
    let actual = service.roll(Die.D20, RollOperation.GreaterThanOrEqual, 0);
    expect(actual).toEqual(0);
  });

  it("roll greater than 7 on a d12", () => {
    let actual = service.roll(Die.D12, RollOperation.GreaterThan, 7);
    expect(actual).toEqual(5/12);
  });

  it("probability rolled greater than or equal to 7 on a d12", () => {
    let actual = service.roll(Die.D20, RollOperation.GreaterThanOrEqual, 12);
    expect(actual).toEqual(6/12);
  });

  it("rollAttackProbability invalid inputs throws invalid input exception", () => {
    expect(service.rollAttackProbability(null, null)).toThrow();
  });

  it("rollAttackProbability for 15 with d20 returns 6/20 = .3", () => {
    let actual = service.rollAttackProbability(Die.D20, 15);
    expect(actual).toEqual(6/20);
  });

  it("rollDamageAverage invalid inputs throws invalid input exception", () => {
    expect(service.rollDamageAverage(Die.D12)).toThrow();
  });

  it("rollDamageAverage for a d12 returns average of d12 = 6.5", () => {
    let actual = service.rollDamageAverage(Die.D12);
    expect(actual).toEqual(6.5);
  });
});
