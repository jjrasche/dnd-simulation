import { TestBed } from '@angular/core/testing';

import { RollService } from './roll.service';
import { Die } from '../enum/die.enum';
import { RollOperation } from '../enum/roll-operation.enum';

describe('RollService', () => {
  let service: RollService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(RollService);
  });

  it("roll, given invalid inputs, will throw", () => {
    expect(() => service.statisticalRoll(null, null, null)).toThrow();
    expect(() => service.statisticalRoll(undefined, undefined, undefined)).toThrow();
  });


  it("roll, given negative desiredRoll input, will throw", () => {
    expect(() => service.statisticalRoll(Die.D10, RollOperation.Equal, -5)).toThrow();
  });

  it("roll, happy path, rolling an 18 on a D20, is a 1 in 20 chance", () => {
    let actual = service.statisticalRoll(Die.D20, RollOperation.Equal, 18);
    expect(actual).toEqual(1/20);
  });

  it("roll, edge case, rolling an 21 on a D20, is a 0 in 20 chance", () => {
    let actual = service.statisticalRoll(Die.D20, RollOperation.Equal, 21);
    expect(actual).toEqual(0);
  });

  it("roll, rolling a 0 on a D20, will throw", () => {
    let actual = () => service.statisticalRoll(Die.D20, RollOperation.Equal, 0);
    expect(actual).toThrow();
  });

  it("roll, edge case, rolling greater than or equal to a 1 on a D20, is a 20 in 20 chance", () => {
    let actual = service.statisticalRoll(Die.D20, RollOperation.GreaterThanOrEqual, 1);
    expect(actual).toEqual(1);
  });

  it("roll, edge case, rolling greater than or equal to a 20 on a D20, is a 0 in 20 chance", () => {
    let actual = service.statisticalRoll(Die.D20, RollOperation.GreaterThanOrEqual, 20);
    expect(actual).toEqual(1/20);
  });

  it("roll, edge case, rolling greater than or equal to a 21 on a D20, is a 0 in 20 chance", () => {
    let actual = service.statisticalRoll(Die.D20, RollOperation.GreaterThanOrEqual, 21);
    expect(actual).toEqual(0);
  });

  it("roll, happy path, rolling greater than 7 on a d12, is a 5 in 12 chance", () => {
    let actual = service.statisticalRoll(Die.D12, RollOperation.GreaterThan, 7);
    expect(actual).toEqual(5/12);
  });

  it("roll, rolling greater than 11 on a d12, is a 1 in 12 chance", () => {
    let actual = service.statisticalRoll(Die.D12, RollOperation.GreaterThan, 11);
    expect(actual).toEqual(1/12);
  });

  it("roll, rolling greater than 12 on a d12, is a 0 chance", () => {
    let actual = service.statisticalRoll(Die.D12, RollOperation.GreaterThan, 12);
    expect(actual).toEqual(0);
  });

  it("roll, rolling greater than 13 on a d12, is a 0 chance", () => {
    let actual = service.statisticalRoll(Die.D12, RollOperation.GreaterThan, 13);
    expect(actual).toEqual(0);
  });

  it("averageRoll, given invalid inputs, will throw", () => {
    expect(() => service.averageRoll(null)).toThrow();
    expect(() => service.averageRoll(undefined)).toThrow();
  });

  it("averageRoll, happy path, correct values are returned", () => {
    expect(service.averageRoll(Die.D12)).toEqual(6.5);
    expect(service.averageRoll(Die.D8)).toEqual(4.5);
  });
});
