import { TestBed } from '@angular/core/testing';

import { Build } from './build.model';
import { Die } from '../enum/die.enum';
import { RollOperation } from '../enum/roll-operation.enum';
import { GetBasicBarbarianBuild } from './build.model.spec.data';
import { Class } from '../enum/class.enum';

describe('BuildModel', () => {

    it("can read and write Class to a Build ", () => {
        let build: Build = GetBasicBarbarianBuild();
        build.class = Class.Bard;
        expect(build.class).toEqual(Class.Bard);
    });

    /**
     * given a new build, setting the class changes the build appropriatley
     * armor class getter fails if ability score invalid
     * armor class with dex 10 calculates to 10
     * armor class with dex 13 calculates to 11
     * armor class with dex 13 and leather armor calculates to 12
     * armor class with dex 13 and chain mail calculates to 16
     * armor class with dex 13 and chain mail and shield calculates to 18
     *
     *
     * base speed 
     */

});
