import { Build } from './build.model';
import { GetBasicBarbarianBuild } from './build.model.spec.data';
import { Class, ClassObject } from '../enum/class.enum';
import { Race, RaceObject } from '../enum/race.enum';
import { Spell, SpellObject } from '../enum/spell.enum';
import { Level } from '../enum/level.enum';
import { Condition, ConditionObject } from '../enum/condition.enum';
import { Tool } from '../enum/equipment/tools.enum';
import { TraitObject } from '../enum/trait.enum';
import { BackgroundObject } from '../enum/background.enum';
import { Skill } from '../enum/skill.enum';
import { Ability } from '../enum/ability.enum';
import { WeaponObject } from '../enum/equipment/weapon.enum';
import { WeaponPropertyObject } from '../enum/equipment/weaponProperty.enum';

describe('BuildModel', () => {

    it("given a build with can read and write Class to a Build ", () => {
        let build: Build = GetBasicBarbarianBuild();
        build.class = Class.Bard;
        expect(build.class).toEqual(Class.Bard);
    });

    // single modifier effect
    it("racial ability modifier: given a build with race specific and base ability, the result is the combination of both", () => {
        let build = new Build();
        build.ability = { Strength: 2, Dexterity: 1, Constitution: 2, Intelligence: 0, Wisdom: -3, Charisma: 0 };
        
        let race = new RaceObject();
        race.abilityModifier = { Strength: 1, Dexterity: 1, Constitution: 2, Intelligence: 0, Wisdom: 0, Charisma: -1 };
        race.effect = RaceObject.prototype.effect,
        build.race = race;

        let expected = { Strength: 3, Dexterity:2, Constitution: 4, Intelligence: 0, Wisdom: -3, Charisma: -1 };
        expect(build.ability).toEqual(expected);
    });
    it("racial trait modifier: given a build with a race based darkvision to 120 feet and spell with dark vision to 60 feet, build.darkVision returns 120", () => {
        let build = new Build();
        build.darkVision = 10;

        let race = new RaceObject();
        let trait = new TraitObject();
        trait.effect = (b: Build): void => { b.darkVision = 120 };
        race.traits.push(trait);
        build.race = race;

        expect(build.darkVision).toEqual(120);
    });
    it("spell modifier: given a build with a spell with dark vision to 60 feet, build.darkVision returns 60", () => {
        let build = new Build();
        build.darkVision = 0

        let spell = new SpellObject();
        spell.effect = (b: Build): void => { b.darkVision = 60 };
        build.spellsInAffect.push(spell);

        expect(build.darkVision).toEqual(60);
    });

    it("default background modifier: given a build with a background that give proficiency in stealth and animal handling, build.skill.stealth = true and build.skill.AnimalHandling = true", () => {
        let build = new Build();

        let background = new BackgroundObject();
        background.skill = { inherent: [Skill.AnimalHandling, Skill.Stealth], selectable: null },
        build.background = background;

        Object.keys(Skill).forEach(key => {
            let buildHasSkill = background.skill.inherent.find(backgroundKey => backgroundKey === Skill[key]) != undefined;
            expect(build.skill[key]).toEqual(buildHasSkill);
        })
    });

    it("specific background modifier: given a build with a background that has a permenant invisible condition, build.condition contains Invisible", () => {
        let build = new Build();

        let background = new BackgroundObject();
        background.effect = (b: Build) => {
            b.conditions.push(Condition.Invisible);
        };
        build.background = background;

        expect(build.conditions[0]).toEqual(Condition.Invisible);
    });

    it("condition modifier: given a build with a speed of 20 and a condition that halves speed, build.speed = 10", () => {
        let build = new Build();
        build.speed = 20;

        let condition = new ConditionObject();
        condition.effect = (b: Build): void => { b.speed /= 2 };

        expect(build.speed).toEqual(10);
    });

    it("level modifier: given a build of level 5, build.proficiencyBonus = 3", () => {
        let build = new Build();
        build.level = Level.Five;

        expect(build.proficiencyBonus).toEqual(3);
    });

    it("class modifier: given with a class that has saving throws of int, dex, and cha, build.savingThrows has those as proficient", () => {
        let build = new Build();
        
        let c = new ClassObject();
        c.savingThrows = [Ability.Intelligence, Ability.Dexterity, Ability.Dexterity],
        build.class = c;

        let expected = { Strength: false, Dexterity: true, Constitution: false, Intelligence: true, Wisdom: false, Charisma: true };
        expect(build.savingThrow).toEqual(expected);
    });

    // modifier interaction
    it("order on max: given a build with racial dark vision of 120 and spell with darkvision of 60, build.darkVision returns the higher one", () => {
        let build = new Build();

        let race = new RaceObject();
        let trait = new TraitObject();
        trait.effect = (b: Build): void => { b.darkVision = 120 };
        race.traits.push(trait);
        build.race = race;

        let spell = new SpellObject();
        spell.effect = (b: Build): void => { b.darkVision = 60 };
        build.spellsInAffect.push(spell);

        expect(build.darkVision).toEqual(120);
    });

    it("order on max: given a build with racial dark vision of 60 and spell with darkvision of 120, build.darkVision returns the higher one", () => {
        let build = new Build();

        let race = new RaceObject();
        let trait = new TraitObject();
        trait.effect = (b: Build): void => { b.darkVision = 60 };
        race.traits.push(trait);
        build.race = race;

        let spell = new SpellObject();
        spell.effect = (b: Build): void => { b.darkVision = 120 };
        build.spellsInAffect.push(spell);

        expect(build.darkVision).toEqual(120);
    });

    // AC = 10 -1 + 1 - 1 + 2 + 2  - 1  + Dex Mod = 2  / 2 = 7
    it("comlex multi-operation modifiers: given a build with race(-1 AC), class(+1 AC), weapon(-1 AC), Armor(+2 AC), shield(+2 AC), spell(-1 AC), spell(+1 Dex), ability.dex = 13, and Condition that halves AC , build.AC = 7", () => {
        let build = new Build();
        build.ability.Dexterity = 13;

        // race with -1 AC trait
        let race = new RaceObject();
        let trait = new TraitObject();
        trait.effect = (b: Build): void => { b.armorClass -= 1 };
        race.traits.push(trait);

        // class grants +1 AC
        let clazz = new ClassObject();
        clazz.effect = (b: Build): void => { b.armorClass += 1 };

        // weapon with -1 AC
        let weapon = new WeaponObject();
        let weaponProperty = new WeaponPropertyObject();
        weaponProperty.effect = (b: Build): void => { b.armorClass -= 1 };
        weapon.properties.push(weaponProperty);
        weapon.inUse = true;

        // armor with +2 AC
        // let armor = new ArmorObject();
        // armor.effect = (b: Build): void => { b.armorClass += 2 };
        // armor.inUse = true;

        // shield with +2 AC
        // let shield = new ShieldObject();
        // shield.effect = (b: Build): void => { b.armorClass += 2 };
        // shield.inUse = true;

        // spell with -1 AC
        let spellMinusAC = new SpellObject();
        spellMinusAC.effect = (b: Build): void => { b.armorClass -= 1 };

        // spell with +1 Dex
        let spellPlusDex = new SpellObject();
        spellPlusDex.effect = (b: Build): void => { b.ability.Dexterity += 1 };

        let condition = new ConditionObject();
        condition.effect = (b: Build): void => { b.armorClass /= 2 };

        build.race = race;
        build.class = clazz;
        build.equipment = [weapon];
        build.spellsInAffect = [spellMinusAC, spellPlusDex];
        build.conditions = [condition];

        expect(build.armorClass).toEqual(7);
    });


    // limitations on builds
    // can't 
});
