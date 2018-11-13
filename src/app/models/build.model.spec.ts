import { Build } from './build.model';
import { GetBasicBarbarianBuild } from './build.model.spec.data';
import { Class } from '../enum/class.enum';
import { Race, RaceObject } from '../enum/race.enum';
import { Spell, SpellObject } from '../enum/spell.enum';
import { Level } from '../enum/level.enum';
import { Condition } from '../enum/condition.enum';
import { ConditionObject } from '../enum/money.enum';
import { Tool } from '../enum/equipment/tools.enum';
import { TraitObject } from '../enum/trait.enum';
import { BackgroundObject } from '../enum/background.enum';
import { Skill } from '../enum/skill.enum';

describe('BuildModel', () => {

    // it("given a build with can read and write Class to a Build ", () => {
    //     let build: Build = GetBasicBarbarianBuild();
    //     build.class = Class.Bard;
    //     expect(build.class).toEqual(Class.Bard);
    // });

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
     * 
     * given a build of level 7, calling applyLevel will return a build with skillProficiency.Deception of Level.Seven.proficiencyBonus
     * given a build with the 'Expertise: Deception' feat, calling applyFeats will return a build with a skillProficiency.Deception of proficiency*2
     * given a build with a spell in affect that doubles proficiency, calling applySpells will return a build with a skillProficiency.Deception of proficiency*2
     * given a build with a speed of 20 and a condition that halves proficiency, calling applyCondition will return a build with a speed of 10
     * given a build with max hp of 10 a trait that increases max hp by 1, calling applyTraits will return a build with a max hp of 11
     * given an equipment that makes the user invisible, calling applyEquipment will return a build with the condition Invisible
     *
     * 
     */

    // it("given a build of level 7, calling applyLevel will return a build with skillProficiency.Deception of Level.Seven.proficiencyBonus", () => {
    //     let build = new Build() as any;
    //     build.level = Level.Seven;
        
    //     let result: Build = build.applyLevel();
    //     expect(result.skillProficiency.Deception).toEqual(Level.Seven.proficiencyBonus);
    // });
    // // wait to implement feats
    // // it("given a build with the 'Expertise: Deception' feat, calling applyFeats will return a build with a skillProficiency.Deception of proficiency*2", () => {
    // //     let build = new Build();
    // //     expect(build.darkVision).toEqual(10);
    // // });
    // it("given a build with a spell in affect that doubles proficiency, calling applySpells will return a build with a skillProficiency.Deception of proficiency*2", () => {
    //     let build = new Build() as any;
    //     let spell = {} as SpellObject;
    //     build.skillProficiency.Deception = 2;
    //     build.spellsInAffect.push(spell);

    //     let result: Build = build.applySpells();
    //     expect(result.skillProficiency.Deception).toEqual(4);
    // });
    // it("given a build with a speed of 20 and a condition that halves proficiency, calling applyCondition will return a build with a speed of 10", () => {
    //     let build = new Build();
    //     build._abilityScores.Dexterity
    //     // let condition = {
    //     //     description: "",
    //     //     effect: (build: Build): void => {
    //     //         build as any._speed /= 2;
    //     //     }
    //     // } as ConditionObject;
    //     // build.baseSpeed = 20        
    //     // build.conditions.push(condition)

    //     // let result: Build = build.applySpells();
    //     expect(result.speed).toEqual(10);
    // });
    // it("given a build with max hp of 10 a trait that increases max hp by 1, calling applyTraits will return a build with a max hp of 11", () => {
    //     let build = new Build();
    //     expect(build.darkVision).toEqual(10);
    // });
    // it("given an equipment that makes the user invisible, calling applyEquipment will return a build with the condition Invisible", () => {
    //     let build = new Build();
    //     expect(build.darkVision).toEqual(10);
    // });
    // it("racial ability: given a build with race specific and base ability, the result is the combination of both", () => {
    //     let build = new Build();
    //     build.ability = { Strength: 2, Dexterity: 1, Constitution: 2, Intelligence: 0, Wisdom: -3, Charisma: 0 };
        
    //     let race = new RaceObject();
    //     race.abilityModifier = { Strength: 1, Dexterity: 1, Constitution: 2, Intelligence: 0, Wisdom: 0, Charisma: -1 };
    //     race.effect = RaceObject.prototype.effect,
    //     build.race = race;

    //     let expected = { Strength: 3, Dexterity:2, Constitution: 4, Intelligence: 0, Wisdom: -3, Charisma: -1 };
    //     expect(build.ability).toEqual(expected);
    // });
    // it("racial trait: given a build with a race based darkvision to 120 feet and spell with dark vision to 60 feet, build.darkVision returns 120", () => {
    //     let build = new Build();
    //     build.darkVision = 10;

    //     let race = new RaceObject();
    //     let trait = new TraitObject();
    //     trait.effect = (b: Build): void => { b.darkVision = 120 };
    //     race.traits.push(trait);
    //     build.race = race;

    //     expect(build.darkVision).toEqual(120);
    // });
    // it("spell effet: given a build with a spell with dark vision to 60 feet, build.darkVision returns 60", () => {
    //     let build = new Build();
    //     build.darkVision = 0

    //     let spell = new SpellObject();
    //     spell.effect = (b: Build): void => { b.darkVision = 60 };
    //     build.spellsInAffect.push(spell);

    //     expect(build.darkVision).toEqual(60);
    // });

    it("default background effet: given a build with a background that give proficiency in stealth and animal handling, build.skill.stealth = true and build.skill.AnimalHandling = true", () => {
        let build = new Build();

        let background = new BackgroundObject();
        background.skill = { inherint: [Skill.AnimalHandling, Skill.Stealth], selectable: null },
        build.background = background;

        Object.keys(Skill).forEach(key => {
            let buildHasSkill = background.skill.inherint.find(backgroundKey => backgroundKey === Skill[key]) != undefined;
            expect(build.skill[key]).toEqual(buildHasSkill);
        })
    });

    // it("given a build with racial dark vision, build.darkVision returns the dark vision of that race", () => {
    //     let build = new Build();
    //     build.race = Race.Elf;
    //     expect(build.darkVision).toEqual(60);
    // });

    // it("given a build with the spell based dark vision, build.darkVision returns the dark vision of that spell", () => {
    //     let build = new Build();
    //     build.spellsInAffect = [Spell.Darkvision];
    //     expect(build.darkVision).toEqual(60);
    // });

    // it("given a build with both racial and spell based dark vision, build.darkVision returns the larger of either the spell or the race", () => {
    //     let build = new Build();
    //     build.race = Race.Elf
    //     build.spellsInAffect = [Spell.Darkvision];
    //     expect(build.darkVision).toEqual(60);
    // });
});
