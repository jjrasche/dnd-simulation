import { Injectable } from '@angular/core';
import { Die } from '../enum/die.enum';

@Injectable({
    providedIn: 'root'
})
export class InputCheckService {

    constructor() { }

    public checkNullInputs(methodName: string, ...args) {
        if (args.filter(arg => arg == null).length) {
            throw new Error(`Method '${methodName}' was called with invalid inputs '${args}'.`)
        }
    };
    
    public checkInputsArePositiveNumbers(methodName: string, ...args) {
        args.forEach(arg => {
            if (arg <= 0) {
                throw new Error(`Method '${methodName}' was called with negatibe number input '${arg}'.`)
            }
        })
    };

    public checkDivideByZero(methodName: string, paramName: string, check: number) {
        if (check === 0) {
            throw new Error(`Method '${methodName}' parameter '${paramName}' would divide by Zero.`);
        }
    };

    public checkReturnNotWithinLimit(methodName: string, lowerLimit: number, upperLimit: number, ret: number): number {
        if (lowerLimit > ret || ret > upperLimit) {
            throw new Error(`Method '${methodName}' return value '${ret}' is not between '${lowerLimit} - ${upperLimit}'.`);
        }
        return ret;
    };

    public checkInputIsGreater(methodName: string, input1: number, input2: number) {
        if (input1 <= input2) {
            throw new Error(`Method '${methodName}' input '${input1}' must be greater than input2 '${input2}'.`);
        }
    };
}
