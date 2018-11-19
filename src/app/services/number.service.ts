import { Injectable } from '@angular/core';
import { InputCheckService } from './input-check.service';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor(
    private inputService: InputCheckService
  ) { }

  public randomNumberBetween(a: number, b: number ): number {
    this.inputService.checkNullInputs("randomNumberBetween", a, b),
    this.inputService.checkInputIsGreater("randomNumberBetween", b, a);
    return Math.floor(Math.random() * 10) + 1;
  }
}
