import { EquipmentObject } from "./equipment.model";
import { BuildAffectingObject } from "../build.object";
import { DieDamage, AmountDamage, DamageType } from "../damage.model";
import { WeaponPropertyObject, WeaponProperty } from "./weaponProperty.model";
import { Build } from "../build.model";
import { ActionTypeEnum } from "src/app/enum/action-type.enum";
import { WeaponEnum } from "src/app/enum/equipment/weapon.enum";
import { Die } from "src/app/enum/die.enum";
import { WeaponCategory } from "src/app/enum/equipment/weapon-category.enum";


export interface Range {
    normal: number
    long: number
}

export class WeaponObject extends EquipmentObject implements BuildAffectingObject {
    category: WeaponCategory;
    range: Range;
    damage: DieDamage | AmountDamage;   // TODO: test handling of difference here
    properties: WeaponPropertyObject[] = [];

    effect = function(b: Build): void {
        // apply weapon properties
        if (this.properties) {
            Object.keys(this.properties).forEach(key => WeaponPropertyObject[key].effect(b));
        }
        // add a hit action to all Melee weapons
        if ([WeaponCategory.SimpleMelee, WeaponCategory.MartialMelee].includes(this.category)) {
            b.actions.push({object: this, actionType: ActionTypeEnum.Hit});
        }
        if ([WeaponCategory.SimpleRange, WeaponCategory.MartialRange].includes(this.category)) {
            b.actions.push({ object: this, actionType: ActionTypeEnum.Shoot });
        }
    };
};

export type WeaponMapType = { [key in WeaponEnum]: WeaponObject };
export const Weapon: WeaponMapType = {
    Club: {
        category: WeaponCategory.SimpleMelee,
        cost: .1,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D4, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Light, WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    Dagger: {
        category: WeaponCategory.SimpleMelee,
        cost: 2,
        weight: 1,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Light, WeaponProperty.Thrown, WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    Greatclub: {
        category: WeaponCategory.SimpleMelee,
        cost: .2,
        weight: 10,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Handaxe: {
        category: WeaponCategory.SimpleMelee,
        cost: 5,
        weight: 2,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Light, WeaponProperty.Thrown, WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    Javelin: {
        category: WeaponCategory.SimpleMelee,
        cost: .5,
        weight: 2,
        range: { normal: 30, long: 120 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Thrown, WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    LightHammer: {
        category: WeaponCategory.SimpleMelee,
        cost: 2,
        weight: 2,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Light, WeaponProperty.Thrown, WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    Mace: {
        category: WeaponCategory.SimpleMelee,
        cost: 5,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    Quarterstaff: {
        category: WeaponCategory.SimpleMelee,
        cost: .2,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Versatile, WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    Sickle: {
        category: WeaponCategory.SimpleMelee,
        cost: 1,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D4, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Light, WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    Spear: {
        category: WeaponCategory.SimpleMelee,
        cost: 1,
        weight: 3,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Thrown, WeaponProperty.Versatile, WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    CrossbowLight: {
        category: WeaponCategory.SimpleRange,
        cost: 25,
        weight: 5,
        range: { normal: 80, long: 320 },
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Loading, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Dart: {
        category: WeaponCategory.SimpleRange,
        cost: .05,
        weight: 0.25,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Thrown],
        effect: WeaponObject.prototype.effect,
    },
    Shortbow: {
        category: WeaponCategory.SimpleRange,
        cost: 25,
        weight: 2,
        range: { normal: 80, long: 320 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Sling: {
        category: WeaponCategory.SimpleRange,
        cost: .1,
        weight: 0,
        range: { normal: 30, long: 120 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Ammunition],
        effect: WeaponObject.prototype.effect,
    },
    Battleaxe: {
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Versatile],
        effect: WeaponObject.prototype.effect,
    },
    Flail: {
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Bludgeoning },
        description: null,
        properties: [],
        effect: WeaponObject.prototype.effect,
    },
    Glaive: {
        category: WeaponCategory.MartialMelee,
        cost: 20,
        weight: 6,
        range: null,
        damage: { numDie: 1, die: Die.D10, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.Reach, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Greataxe: {
        category: WeaponCategory.MartialMelee,
        cost: 30,
        weight: 7,
        range: null,
        damage: { numDie: 1, die: Die.D12, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Greatsword: {
        category: WeaponCategory.MartialMelee,
        cost: 50,
        weight: 6,
        range: null,
        damage: { numDie: 2, die: Die.D6, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Halberd: {
        category: WeaponCategory.MartialMelee,
        cost: 20,
        weight: 6,
        range: null,
        damage: { numDie: 1, die: Die.D10, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.Reach, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Lance: {
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 6,
        range: null,
        damage: { numDie: 1, die: Die.D12, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Reach, WeaponProperty.Special],
        effect: WeaponObject.prototype.effect,
    },
    Longsword: {
        category: WeaponCategory.MartialMelee,
        cost: 15,
        weight: 3,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Versatile],
        effect: WeaponObject.prototype.effect,
    },
    Maul: {
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 10,
        range: null,
        damage: { numDie: 2, die: Die.D6, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Morningstar: {
        category: WeaponCategory.MartialMelee,
        cost: 15,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [],
        effect: WeaponObject.prototype.effect,
    },
    Pike: {
        category: WeaponCategory.MartialMelee,
        cost: 5,
        weight: 18,
        range: null,
        damage: { numDie: 1, die: Die.D10, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.Reach, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Rapier: {
        category: WeaponCategory.MartialMelee,
        cost: 25,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Finesse],
        effect: WeaponObject.prototype.effect,
    },
    Scimitar: {
        category: WeaponCategory.MartialMelee,
        cost: 25,
        weight: 3,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Light],
        effect: WeaponObject.prototype.effect,
    },
    Shortsword: {
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Light, WeaponProperty.Monk],
        effect: WeaponObject.prototype.effect,
    },
    Trident: {
        category: WeaponCategory.MartialMelee,
        cost: 5,
        weight: 4,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Thrown, WeaponProperty.Versatile],
        effect: WeaponObject.prototype.effect,
    },
    WarPick: {
        category: WeaponCategory.MartialMelee,
        cost: 5,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [],
        effect: WeaponObject.prototype.effect,
    },
    Warhammer: {
        category: WeaponCategory.MartialMelee,
        cost: 15,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Versatile],
        effect: WeaponObject.prototype.effect,
    },
    Whip: {
        category: WeaponCategory.MartialMelee,
        cost: 2,
        weight: 3,
        range: null,
        damage: { numDie: 1, die: Die.D4, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Reach],
        effect: WeaponObject.prototype.effect,
    },
    Blowgun: {
        category: WeaponCategory.MartialRange,
        cost: 10,
        weight: 1,
        range: { normal: 25, long: 100 },
        damage: { amount: 1, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Loading],
        effect: WeaponObject.prototype.effect,
    },
    CrossbowHand: {
        category: WeaponCategory.MartialRange,
        cost: 75,
        weight: 3,
        range: { normal: 30, long: 120 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Light, WeaponProperty.Loading],
        effect: WeaponObject.prototype.effect,
    },
    CrossbowHeavy: {
        category: WeaponCategory.MartialRange,
        cost: 50,
        weight: 18,
        range: { normal: 100, long: 400 },
        damage: { numDie: 1, die: Die.D10, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Light, WeaponProperty.Loading, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Longbow: {
        category: WeaponCategory.MartialRange,
        cost: 50,
        weight: 2,
        range: { normal: 150, long: 600 },
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Heavy, WeaponProperty.TwoHanded],
        effect: WeaponObject.prototype.effect,
    },
    Net: {
        category: WeaponCategory.MartialRange,
        cost: 1,
        weight: 3,
        range: { normal: 5, long: 15 },
        damage: { amount: 0, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Thrown, WeaponProperty.Special],
        effect: WeaponObject.prototype.effect,
    },
};

// // Add EquipmentCategory.Tools to all tools.
// Object.keys(Weapon).forEach(key => Weapon[key].EquipmentCategory = EquipmentCategory.Weapon);

// TODO: why is this typing weird and I cant export const SimpleMeleeWeapons: WeaponMapType   -->   Type 'WeaponObject[]' is not assignable to type 'WeaponMapType'. Property 'Club' is missing in type 'WeaponObject[]'. [2322]
export const AllWeapons: WeaponObject[] = Object.keys(Weapon).map(key => Weapon[key]);
export const SimpleMeleeWeapons = AllWeapons.filter(weapon => weapon.category == WeaponCategory.SimpleMelee); 
export const SimpleRangeWeapons = AllWeapons.filter(weapon => weapon.category == WeaponCategory.SimpleRange);
export const MartialeMeleeWeapons = AllWeapons.filter(weapon => weapon.category == WeaponCategory.MartialMelee);
export const MartialRangeWeapons = AllWeapons.filter(weapon => weapon.category == WeaponCategory.MartialRange);

export const SimpleWeapons = [...SimpleMeleeWeapons, ...SimpleRangeWeapons];
export const MartialWeapons = [...MartialeMeleeWeapons, ...MartialRangeWeapons];
export const RangeWeapons = [...SimpleRangeWeapons, ...MartialRangeWeapons];
export const MeleeWeapons = [...SimpleMeleeWeapons, ...MartialeMeleeWeapons];
