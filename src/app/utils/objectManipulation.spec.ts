import { TestBed } from '@angular/core/testing';

import { copyBuild } from './objectManipulation';
import { Die } from '../enum/die.enum';
import { Build } from '../models/build.model';
import { Race } from '../enum/race.enum';
import { Class } from '../enum/class.enum';

describe('ObjectManipulation', () => {
    it("given a Build object, copyBuild new build object has all the properties the original did", () => {
        let b = new Build();
        let copy = copyBuild(b);

        console.log(methods(b));
        console.log(Build.prototype)
        const objectKeys = Object.keys(b)

        Object.keys(b).forEach(key => {
            expect(copy.hasOwnProperty(key)).toBeTruthy();
        });
    });

    it("can access deep members", () => {
        let b = new Build();
        b.race = Race.Human;
        let copy = copyBuild(b);
        console.log(b.race)
        b.class = Class.Bard;
        copy.class = Class.Cleric;
        console.log(b.class)
        console.log(copy.class)

        expect(b).not.toBe(copy);
        expect(b.race.languages.inherent).toEqual(copy.race.languages.inherent);
    });
});

function methods(obj) {
    var p = [];
    for (; obj != null; obj = Object.getPrototypeOf(obj)) {
        var op = Object.getOwnPropertyNames(obj);
        for (var i = 0; i < op.length; i++)
            if (p.indexOf(op[i]) == -1)
                p.push(op[i]);
    }
    return p;
}
