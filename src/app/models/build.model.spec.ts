import { Build } from './build.model';
import { RaceObject } from './race.model';
import { TraitObject } from './trait.model';
import { SpellObject } from './spell.model';
import { BackgroundObject } from './background.model';
import { Skill } from './skill.model';
import { Condition, ConditionObject } from './condition.model';
import { BuildEffect, BuildEffectOperation } from './build.object';
import { LevelObject } from './level.model';
import { ClassObject } from './class.model';
import { Ability } from './ability.model';
import { SubRaceObject } from './subRace.model';
import { WeaponCategory } from '../enum/equipment/weapon-category.enum';
import { DamageType } from './damage.model';
import { WeaponObject } from './equipment/weapon.model';
import { WeaponPropertyObject } from './equipment/weaponProperty.model';
import { ArmorObject, OverWriteEffect, AdditiveEffect } from './equipment/armor.model';
import { ArmorCategory } from '../enum/equipment/armor-category.enum';
import { AbilityEnum } from '../enum/ability.enum';


describe('BuildModel', () => {

    // single modifier effect
    it("racial ability modifier: given a build with race specific and base ability, the result is the combination of both", () => {
        let build = new Build();
        build.ability = { Strength: 2, Dexterity: 1, Constitution: 2, Intelligence: 0, Wisdom: -3, Charisma: 0 };
        
        build.ability.Wisdom += -5;
        console.log(build.ability.Wisdom)
        let race = new RaceObject({
            description: "",
            subRaces: null,
            abilityModifier: { Strength: 1, Dexterity: 1, Constitution: 2, Intelligence: 0, Wisdom: 0, Charisma: -1 },
            size: null,
            speed: null,
            equipmentProficiency: null,
            skillProficiency: null,
            languages: null,
            traits: null,
        });
        build.race = race;

        let expected = { Strength: 3, Dexterity:2, Constitution: 4, Intelligence: 0, Wisdom: -3, Charisma: -1 };
        expect(build.ability).toEqual(expected);
    });
    it("racial trait modifier: given a build with a race based darkvision to 120 feet and spell with dark vision to 60 feet, build.darkVision returns 120", () => {
        let build = new Build();
        build.darkVision = 10;

        let race = new RaceObject({
            description: "",
            subRaces: null,
            abilityModifier: null,
            size: null,
            speed: null,
            equipmentProficiency: null,
            skillProficiency: null,
            languages: null,
            traits: [new TraitObject({
                description: "",
                mod: [new BuildEffect({
                    name: "trait",
                    property: "darkVision",
                    operation: BuildEffectOperation.Override,
                    value: "120"
                })],
            })]
        });        
        build.race = race;

        expect(build.darkVision).toEqual(120);
    });
    xit("spell modifier: given a build with a spell with dark vision to 60 feet, build.darkVision returns 60", () => {
        let build = new Build();
        build.darkVision = 0

        let spell = new SpellObject({
            description: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
            mod: [new BuildEffect({
                name: "condition",
                property: "proficiencyBonus",
                // (b: Build): void => { b.darkVision = 60 },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        });
        build.spellsInAffect.push(spell);

        expect(build.darkVision).toEqual(60);
    });

    xit("default background modifier: given a build with a background that gives proficiency in stealth and animal handling, build.skill.stealth = true and build.skill.AnimalHandling = true", () => {
        let build = new Build();

        let background = new BackgroundObject({
            description: "",
            skill: { inherent: [Skill.AnimalHandling, Skill.Stealth], selectable: null },
        });
        build.background = background;

        Object.keys(Skill).forEach(key => {
            let buildHasSkill = background.skill.inherent.find(backgroundKey => backgroundKey === Skill[key]) != undefined;
            expect(build.skill[key]).toEqual(buildHasSkill);
        })
    });

    xit("specific background modifier: given a build with a background that has a permenant invisible condition, build.condition contains Invisible", () => {
        let build = new Build();

        let be = new BuildEffect({
            name: "background",
            property: "condition",
            // (b: Build) => b.conditions.push(Condition.Invisible,
            operation: BuildEffectOperation.Add,
            value: 1
            });
        let background = new BackgroundObject({
            description: "",
            skill: null,
            mod: [be],
        });
        build.background = background;

        expect(build.conditions[0]).toEqual(Condition.Invisible);
    });

    xit("condition modifier: given a build with a speed of 20 and a condition that halves speed, build.speed = 10", () => {
        let build = new Build();
        build.speed = 20;

        let condition = new ConditionObject({
            description: "",
            mod: [new BuildEffect({
                name: "condition",
                property: "speed",
                // (b: Build) => b.speed /= ,
                operation: BuildEffectOperation.Add,
                value: 1
            })]
        });
        build.conditions.push(condition);

        expect(build.speed).toEqual(10);
    });
    
    xit("level modifier: given a build of level 5, build.proficiencyBonus = 3", () => {
        let build = new Build();
        build.level = new LevelObject({
            proficiencyBonus: 3,
            description: "",
        });

        expect(build.proficiencyBonus).toEqual(3);
    });

    xit("class modifier: given a build with a class that has saving throws of int, dex, and cha, build.savingThrows has those as proficient", () => {
        let build = new Build();

        build.class = new ClassObject({
            description: "",
            skill: null,
            savingThrows: [Ability.Intelligence, Ability.Dexterity, Ability.Charisma],
            equipmentProficiency: null,
            hitDie: null,
            startingEquipment: null,
        });

        let expected = { Strength: false, Dexterity: true, Constitution: false, Intelligence: true, Wisdom: false, Charisma: true };
        expect(build.savingThrow).toEqual(expected);
    });

    xit("subRace modifier: given a build with a race that has a subRace, subrace modifications are applied", () => {
        let build = new Build();

        build.subRace = new SubRaceObject({
            description: "",
            abilityModifier: { Strength: 1, Dexterity: 1, Constitution: 1, Intelligence: 0, Wisdom: 0, Charisma: -1 },
            mod: [new BuildEffect({
                name: "subrace",
                property: "speed",
                // (b: Build): void => { b.speed = Math.max(b.speed, 25) },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        })

        expect(build.ability).toEqual({ Strength: 1, Dexterity: 1, Constitution: 1, Intelligence: 0, Wisdom: 0, Charisma: -1 });
        expect(build.speed).toEqual(25);
    });

    // multiple modifier interaction
    xit("order on max: given a build with racial dark vision of 120 and spell with darkvision of 60, build.darkVision returns the higher one", () => {
        let build = new Build();

        build.race = new RaceObject({
            description: "",
            subRaces: null,
            abilityModifier: null,
            size: null,
            speed: null,
            equipmentProficiency: null,
            skillProficiency: null,
            languages: null,
            traits: [new TraitObject({
                description: "",
                // TOOD: thought about adding number prototype extension to do b.darkVision.max(120) --> set this to higher of darkvision or 120
                mod: [new BuildEffect({
                    name: "trait",
                    property: "darkvision",
                    // (b: Build): void => { b.darkVision = Math.max(b.darkVision, 120) },
                    operation: BuildEffectOperation.Add,
                    value: 1
                })],
            })]
        });

        let spell = new SpellObject({
            description: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
            mod: [new BuildEffect({
                name: "condition",
                property: "proficiencyBonus",
                // (b: Build): void => { b.darkVision = Math.max(b.darkVision, 60) },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        });
        build.spellsInAffect.push(spell);

        expect(build.darkVision).toEqual(120);
    });

    xit("order on max: given a build with racial dark vision of 60 and spell with darkvision of 120, build.darkVision returns the higher one", () => {
        let build = new Build();

        let race = new RaceObject({
            description: "",
            abilityModifier: null,
            size: null,
            speed: null,
            equipmentProficiency: null,
            skillProficiency: null,
            languages: null,
            traits: [new TraitObject({
                description: "",
                // TOOD: thought about adding number prototype extension to do b.darkVision.max(120) --> set this to higher of darkvision or 120
                mod: [new BuildEffect({
                    name: "trait",
                    property: "darkvision",
                    // (b: Build): void => { b.darkVision = Math.max(b.darkVision, 60) },
                    operation: BuildEffectOperation.Add,
                    value: 1
                })],
            })]
        });
        build.race = race;

        let spell = new SpellObject({
            description: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
            mod: [new BuildEffect({
                name: "condition",
                property: "proficiencyBonus",
                // (b: Build): void => { b.darkVision = Math.max(b.darkVision, 120) },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        });
        build.spellsInAffect.push(spell);

        expect(build.darkVision).toEqual(120);
    });

    xit("Evaluating string BuildEffects, the buid should process BuildEffects with EvaluatedStrings without usig functions", () => {
        let build = new Build();

        // armor 
        build.equipment.push(new ArmorObject({
            description: null,
            category: ArmorCategory.Light,
            strengthNeeded: 0,
            stealthDisadvantage: false,
            weight: 8,
            cost: 5,
            inUse: true,
            armorEffect: new OverWriteEffect({ base: 12, addDex: false, maxDex: null }),
        }));

        // shield with +2 AC
        build.equipment.push(new ArmorObject({
            description: null,
            category: ArmorCategory.Shield,
            strengthNeeded: 0,
            stealthDisadvantage: false,
            weight: 8,
            cost: 5,
            inUse: true,
            armorEffect: new AdditiveEffect({ add: 2 }),
        }));

        expect(build.armorClass).toEqual(14);
    });

    xit("order of operations: given an initialize build effect (speed = 20) an add  build effect (+10 speed) and a divide build effect (speed / 2), build.speed will be  ", () => {
        let build = new Build();

        // race with -1 AC trait
        build.race = new RaceObject({
            description: "",
            subRaces: null,
            abilityModifier: null,
            size: null,
            speed: null,
            equipmentProficiency: null,
            skillProficiency: null,
            languages: null,
            traits: [new TraitObject({
                description: "",
                mod: [new BuildEffect({
                    name: "trait",
                    property: "armorClass",
                    // (b: Build): void => { b.armorClass -= 1 },
                    operation: BuildEffectOperation.Subtract,
                    value: 1
                })],
            })]
        });

        // class grants +1 AC
        build.class = new ClassObject({
            description: "",
            skill: null,
            savingThrows: null,
            equipmentProficiency: null,
            hitDie: null,
            startingEquipment: null,
            mod: [new BuildEffect({
                name: "class",
                property: "armorClass",
                // (b: Build): void => { b.armorClass += 1 },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        });

        // weapon with -1 AC        
        build.equipment.push(new WeaponObject({
            description: null,
            cost: 5,
            weight: 10,
            category: WeaponCategory.MartialMelee,
            damage: { amount: 17, type: DamageType.Acid },
            inUse: true,
            properties: [new WeaponPropertyObject({
                description: null,
                mod: [new BuildEffect({
                    name: "weaponProperty",
                    property: "armorClass",
                    // (b: Build): void => { b.armorClass -= 1 },
                    operation: BuildEffectOperation.Subtract,
                    value: 1
                })],
            })]
        }));

        // armor 
        build.equipment.push(new ArmorObject({
            description: null,
            category: ArmorCategory.Light,
            strengthNeeded: 0,
            stealthDisadvantage: false,
            weight: 8,
            cost: 5,
            inUse: true,
            armorEffect: new OverWriteEffect({ base: 12, addDex: false, maxDex: null }),
        }));

        // shield with +2 AC
        build.equipment.push(new ArmorObject({
            description: null,
            category: ArmorCategory.Shield,
            strengthNeeded: 0,
            stealthDisadvantage: false,
            weight: 8,
            cost: 5,
            inUse: true,
            armorEffect: new AdditiveEffect({ add: 2 }),
        }));

        // spell with -1 AC
        build.spellsInAffect.push(new SpellObject({
            description: null,
            mod: [new BuildEffect({
                name: "spell",
                property: "armorClass",
                // (b: Build): void => { b.armorClass -= 1 },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        }));

        // spell with +1 Dex
        build.spellsInAffect.push(new SpellObject({
            description: null,
            mod: [new BuildEffect({
                name: "spell",
                property: "armorClass",
                // (b: Build): void => { b.armorClass += 1 },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        }));

        build.conditions.push(new ConditionObject({
            description: "",
            mod: [new BuildEffect({
                name: "condition",
                property: "armorClass",
                // (b: Build) => b.armorClass /= 2,
                operation: BuildEffectOperation.Add,
                value: 1
            })]
        }));

        expect(build.armorClass).toEqual(7);
    });

    // AC = 10 -1 + 1 - 1 + 2 + 2  - 1  + Dex Mod = 2  / 2 = 7
    xit("complex multi-operation modifiers: given a build with race(-1 AC), class(+1 AC), weapon(-1 AC), Armor(+2 AC), shield(+2 AC), spell(-1 AC), spell(+1 Dex), ability.dex = 13, and Condition that halves AC , build.AC = 7", () => {
        let build = new Build();
        // build.ability.Dexterity = 13;

        // race with -1 AC trait
        build.race = new RaceObject({
            description: "",
            subRaces: null,
            abilityModifier: null,
            size: null,
            speed: null,
            equipmentProficiency: null,
            skillProficiency: null,
            languages: null,
            traits: [new TraitObject({
                description: "",
                mod: [new BuildEffect({
                    name: "trait",
                    property: "armorClass",
                    // (b: Build): void => { b.armorClass -= 1 },
                    operation: BuildEffectOperation.Add,
                    value: 1
                })],
            })]
        });

        // class grants +1 AC
        build.class = new ClassObject({
            description: "",
            skill: null,
            savingThrows: null,
            equipmentProficiency: null,
            hitDie: null,
            startingEquipment: null,
            mod: [new BuildEffect({
                name: "class",
                property: "armorClass",
                // (b: Build): void => { b.armorClass += 1 },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        });

        // weapon with -1 AC        
        build.equipment.push(new WeaponObject({
            description: null,
            cost: 5,
            weight: 10,
            category: WeaponCategory.MartialMelee,
            damage: {amount: 17, type: DamageType.Acid},
            inUse: true,
            properties: [new WeaponPropertyObject({
                description: null,
                mod: [new BuildEffect({
                    name: "weaponProperty",
                    property: "armorClass",
                    // (b: Build): void => { b.armorClass -= 1 },
                    operation: BuildEffectOperation.Add,
                    value: 1
                })],
            })]
        }));

        // armor 
        build.equipment.push(new ArmorObject({
            description: null,
            category: ArmorCategory.Light,
            strengthNeeded: 0,
            stealthDisadvantage: false,
            weight: 8,
            cost: 5,
            inUse: true,
            armorEffect: new OverWriteEffect({ base: 12, addDex: false, maxDex: null }),
        }));

        // shield with +2 AC
        build.equipment.push(new ArmorObject({
            description: null,
            category: ArmorCategory.Shield,
            strengthNeeded: 0,
            stealthDisadvantage: false,
            weight: 8,
            cost: 5,
            inUse: true,
            armorEffect: new AdditiveEffect({ add: 2 }),
        }));

        // spell with -1 AC
        build.spellsInAffect.push(new SpellObject({
            description: null,
            mod: [new BuildEffect({
                name: "spell",
                property: "armorClass",
                // (b: Build): void => { b.armorClass -= 1 },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        }));

        // spell with +1 Dex
        build.spellsInAffect.push(new SpellObject({
            description: null,
            mod: [new BuildEffect({
                name: "spell",
                property: "armorClass",
                // (b: Build): void => { b.armorClass += 1 },
                operation: BuildEffectOperation.Add,
                value: 1
            })],
        }));

        build.conditions.push(new ConditionObject({
            description: "",
            mod: [new BuildEffect({
                name: "condition",
                property: "armorClass",
                // (b: Build) => b.armorClass /=2 ,
                operation: BuildEffectOperation.Add,
                value: 1
            })]
        }));

        expect(build.armorClass).toEqual(7);
    });

    xit("modifier", () => {
        let build = new Build();
        build.ability = { Strength: 14, Dexterity: 13, Constitution: 11, Intelligence: 5, Wisdom: 20, Charisma: 0 };
        
        let actual = Object.keys(Ability).map(key => build.getAbilityModifier(Ability[key]));

        expect(actual).toEqual([2,1,0,-3,5, -5]);

    });

    /**
     * If you wear armor that you lack proficiency with, you have disadvantage on any ability check, saving throw, or attack roll 
     * that involves Strength or Dexterity, and you can’t cast spells.
     * 
     * 
     * each piece of equipment can:
     *  - modify the character              e.g. add to ability score
     *  - add an action
     * 
     */
    // xit("multi-modifier effect on proficiency: given build is using armor it is not proficient in, then disadvantage on ability, throw, attacks for dex/str and can't cast spells.", () => {
    //     let build = new Build();
    //     build.ability.Dexterity = 13;

    //     // build has proficiency with no armor 
    //     let armor = new ArmorObject();
    //     armor.category = ArmorCategory.Light
    //     armor.inUse = true;


    //     // figure out how 
    //     // expect(build.ability.Dexterity).toEqual(true);
    //     // expect(build.ability.Strength).toEqual(true);

    //     // console.log(SimpleMeleeWeapons.map(obj => obj.name))
    //     // console.log(SimpleRangeWeapons.map(obj => obj.name))
    //     // console.log(MartialeMeleeWeapons.map(obj => obj.name))
    //     // console.log(MartialRangeWeapons.map(obj => obj.name))
    //     // console.log(Equipment.AcidVial)

    //     // console.log(GearByCategory.Druidicfocus.map(gear => gear.name))
    //     // console.log(ToolByCategory.MusicalInstrument.map(gear => gear.name))
    // });
});
