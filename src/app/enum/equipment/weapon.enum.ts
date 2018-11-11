import { Skill } from "../skill.enum";
import { Die } from "../die.enum";
import { DamageTypeObject, DamageType } from "../damageType.enum";
import { EquipmentObject } from "./equipment.enum";

export enum WeaponEnum {
    Club = "Club",
    Dagger = "Dagger",
    Greatclub = "Greatclub",
    Handaxe = "Handaxe",
    Javelin = "Javelin",
    LightHammer = "LightHammer",
    Mace = "Mace",
    Quarterstaff = "Quarterstaff",
    Sickle = "Sickle",
    Spear = "Spear",
    CrossbowLight = "CrossbowLight",
    Dart = "Dart",
    Shortbow = "Shortbow",
    Sling = "Sling",
    Battleaxe = "Battleaxe",
    Flail = "Flail",
    Glaive = "Glaive",
    Greataxe = "Greataxe",
    Greatsword = "Greatsword",
    Halberd = "Halberd",
    Lance = "Lance",
    Longsword = "Longsword",
    Maul = "Maul",
    Morningstar = "Morningstar",
    Pike = "Pike",
    Rapier = "Rapier",
    Scimitar = "Scimitar",
    Shortsword = "Shortsword",
    Trident = "Trident",
    WarPick = "WarPick",
    Warhammer = "Warhammer",
    Whip = "Whip",
    Blowgun = "Blowgun",
    CrossbowHand = "CrossbowHand",
    CrossbowHeavy = "CrossbowHeavy",
    Longbow = "Longbow",
    Net = "Net",
};

export enum WeaponCategory {
    SimpleMelee = "SimpleMelee",
    SimpleRange = "SimpleRange",
    MartialMelee = "MartialMelee",
    MartialRange = "MartialRange",
}

export interface Range {
    normal: number
    long: number
}

export interface DieDamage {
    numDie: number;
    die: Die;
    type: DamageTypeObject
}

export interface AmountDamage {
    amount: number;
    type: DamageTypeObject
}

export interface WeaponObject extends EquipmentObject {
    weaponCategory: WeaponCategory;
    range: Range;
    damage: DieDamage | AmountDamage;   // TODO: test handling of difference here
    // properties:  TODO codify interaction bewteen weapon.properties and action
};

// type t: { [key in WeaponEnum]: WeaponObject }

// type effect = (n: Build) => Build;


export const Weapon: { [key in WeaponEnum]: WeaponObject } = {
    Club: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: .1,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D4, type: DamageType.Bludgeoning },
        description: null,
    },
    Dagger: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: 2,
        weight: 1,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Piercing },
        description: null,
    },
    Greatclub: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: .2,
        weight: 10,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Bludgeoning },
        description: null,
    },
    Handaxe: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: 5,
        weight: 2,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Slashing },
        description: null,
    },
    Javelin: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: .5,
        weight: 2,
        range: { normal: 30, long: 120 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
    },
    LightHammer: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: 2,
        weight: 2,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Bludgeoning },
        description: null,
    },
    Mace: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: 5,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Bludgeoning },
        description: null,
    },
    Quarterstaff: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: .2,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Bludgeoning },
        description: null,
    },
    Sickle: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: 1,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D4, type: DamageType.Slashing },
        description: null,
    },
    Spear: {
        weaponCategory: WeaponCategory.SimpleMelee,
        cost: 1,
        weight: 3,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Piercing },
        description: null,
    },
    CrossbowLight: {
        weaponCategory: WeaponCategory.SimpleRange,
        cost: 25,
        weight: 5,
        range: { normal: 80, long: 320 },
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
    },
    Dart: {
        weaponCategory: WeaponCategory.SimpleRange,
        cost: .05,
        weight: 0.25,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Piercing },
        description: null,
    },
    Shortbow: {
        weaponCategory: WeaponCategory.SimpleRange,
        cost: 25,
        weight: 2,
        range: { normal: 80, long: 320 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
    },
    Sling: {
        weaponCategory: WeaponCategory.SimpleRange,
        cost: .1,
        weight: 0,
        range: { normal: 30, long: 120 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Bludgeoning },
        description: null,
    },
    Battleaxe: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Slashing },
        description: null,
    },
    Flail: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Bludgeoning },
        description: null,
    },
    Glaive: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 20,
        weight: 6,
        range: null,
        damage: { numDie: 1, die: Die.D10, type: DamageType.Slashing },
        description: null,
    },
    Greataxe: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 30,
        weight: 7,
        range: null,
        damage: { numDie: 1, die: Die.D12, type: DamageType.Slashing },
        description: null,
    },
    Greatsword: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 50,
        weight: 6,
        range: null,
        damage: { numDie: 2, die: Die.D6, type: DamageType.Slashing },
        description: null,
    },
    Halberd: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 20,
        weight: 6,
        range: null,
        damage: { numDie: 1, die: Die.D10, type: DamageType.Slashing },
        description: null,
    },
    Lance: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 6,
        range: null,
        damage: { numDie: 1, die: Die.D12, type: DamageType.Piercing },
        description: null,
    },
    Longsword: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 15,
        weight: 3,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Slashing },
        description: null,
    },
    Maul: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 10,
        range: null,
        damage: { numDie: 2, die: Die.D6, type: DamageType.Bludgeoning },
        description: null,
    },
    Morningstar: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 15,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
    },
    Pike: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 5,
        weight: 18,
        range: null,
        damage: { numDie: 1, die: Die.D10, type: DamageType.Piercing },
        description: null,
    },
    Rapier: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 25,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
    },
    Scimitar: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 25,
        weight: 3,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Slashing },
        description: null,
    },
    Shortsword: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
    },
    Trident: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 5,
        weight: 4,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Slashing },
        description: null,
    },
    WarPick: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 5,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
    },
    Warhammer: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 15,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Bludgeoning },
        description: null,
    },
    Whip: {
        weaponCategory: WeaponCategory.MartialMelee,
        cost: 2,
        weight: 3,
        range: null,
        damage: { numDie: 1, die: Die.D4, type: DamageType.Slashing },
        description: null,
    },
    Blowgun: {
        weaponCategory: WeaponCategory.MartialRange,
        cost: 10,
        weight: 1,
        range: { normal: 25, long: 100 },
        damage: { amount: 1, type: DamageType.Piercing },
        description: null,
    },
    CrossbowHand: {
        weaponCategory: WeaponCategory.MartialRange,
        cost: 75,
        weight: 3,
        range: { normal: 30, long: 120 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
    },
    CrossbowHeavy: {
        weaponCategory: WeaponCategory.MartialRange,
        cost: 50,
        weight: 18,
        range: { normal: 100, long: 400 },
        damage: { numDie: 1, die: Die.D10, type: DamageType.Piercing },
        description: null,
    },
    Longbow: {
        weaponCategory: WeaponCategory.MartialRange,
        cost: 50,
        weight: 2,
        range: { normal: 150, long: 600 },
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
    },
    Net: {
        weaponCategory: WeaponCategory.MartialRange,
        cost: 1,
        weight: 3,
        range: { normal: 5, long: 15 },
        damage: { amount: 0, type: DamageType.Slashing },
        description: null,
    },
};