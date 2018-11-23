import { BaseBuildAffectingEquipmentObject, BaseBuildAffectingEquipmentConstructor } from "./equipment.model";
import { BuildEffect } from "../build.object";
import { DieDamage, AmountDamage, DamageType } from "../damage.model";
import { WeaponPropertyObject, WeaponProperty } from "./weaponProperty.model";
import { Build } from "../build.model";
import { ActionTypeEnum } from "src/app/enum/action-type.enum";
import { WeaponEnum } from "src/app/enum/equipment/weapon.enum";
import { Die } from "src/app/enum/die.enum";
import { WeaponCategory } from "src/app/enum/equipment/weapon-category.enum";
import { Action } from "../action.model";

interface IWeaponObject {
    category: WeaponCategory;
    range?: Range;
    damage: DieDamage | AmountDamage;
    properties?: Array<WeaponPropertyObject>;
}
type WeaponConstructor = IWeaponObject & BaseBuildAffectingEquipmentConstructor;

export interface Range {
    normal: number
    long: number
}

export class WeaponObject extends BaseBuildAffectingEquipmentObject {
    category: WeaponCategory;
    range?: Range;
    damage: DieDamage | AmountDamage;   // TODO: test handling of difference here
    properties?: WeaponPropertyObject[] = [];

    constructor(obj: WeaponConstructor) {
        super(obj);
        this.category = obj.category;
        this.range = obj.range;
        this.damage = obj.damage;
        this.properties = obj.properties;

        // Add default actions based on weapon type.
        if ([WeaponCategory.SimpleMelee, WeaponCategory.MartialMelee].includes(this.category)) {
            this.mod.push(new BuildEffect("weapon", "actions", (b: Build) => b.actions.push(new Action())));
        }
        if ([WeaponCategory.SimpleRange, WeaponCategory.MartialRange].includes(this.category)) {
            this.mod.push(new BuildEffect("weapon", "actions", (b: Build) => b.actions.push(new Action())));
        }
        // Add build affecting properties from each weapon.
        if (this.properties) {
            this.properties.map((prop: WeaponPropertyObject) => prop.mod)
                .forEach((effects: BuildEffect[]) => effects
                    .forEach((be: BuildEffect) => this.mod.push(be)));
        }
    }
};

export type WeaponMapType = { [key in WeaponEnum]: WeaponObject };
export const Weapon: WeaponMapType = {
    Club: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: .1,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D4, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Light, WeaponProperty.Monk],
    }),
    Dagger: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: 2,
        weight: 1,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Light, WeaponProperty.Thrown, WeaponProperty.Monk],
    }),
    Greatclub: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: .2,
        weight: 10,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.TwoHanded],
    }),
    Handaxe: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: 5,
        weight: 2,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Light, WeaponProperty.Thrown, WeaponProperty.Monk],
    }),
    Javelin: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: .5,
        weight: 2,
        range: { normal: 30, long: 120 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Thrown, WeaponProperty.Monk],
    }),
    LightHammer: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: 2,
        weight: 2,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Light, WeaponProperty.Thrown, WeaponProperty.Monk],
    }),
    Mace: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: 5,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Monk],
    }),
    Quarterstaff: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: .2,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Versatile, WeaponProperty.Monk],
    }),
    Sickle: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: 1,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D4, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Light, WeaponProperty.Monk],
    }),
    Spear: new WeaponObject({
        category: WeaponCategory.SimpleMelee,
        cost: 1,
        weight: 3,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Thrown, WeaponProperty.Versatile, WeaponProperty.Monk],
    }),
    CrossbowLight: new WeaponObject({
        category: WeaponCategory.SimpleRange,
        cost: 25,
        weight: 5,
        range: { normal: 80, long: 320 },
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Loading, WeaponProperty.TwoHanded],
    }),
    Dart: new WeaponObject({
        category: WeaponCategory.SimpleRange,
        cost: .05,
        weight: 0.25,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Thrown],
    }),
    Shortbow: new WeaponObject({
        category: WeaponCategory.SimpleRange,
        cost: 25,
        weight: 2,
        range: { normal: 80, long: 320 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.TwoHanded],
    }),
    Sling: new WeaponObject({
        category: WeaponCategory.SimpleRange,
        cost: .1,
        weight: 0,
        range: { normal: 30, long: 120 },
        damage: { numDie: 1, die: Die.D4, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Ammunition],
    }),
    Battleaxe: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Versatile],
    }),
    Flail: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Bludgeoning },
        description: null,
        properties: [],
    }),
    Glaive: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 20,
        weight: 6,
        range: null,
        damage: { numDie: 1, die: Die.D10, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.Reach, WeaponProperty.TwoHanded],
    }),
    Greataxe: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 30,
        weight: 7,
        range: null,
        damage: { numDie: 1, die: Die.D12, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.TwoHanded],
    }),
    Greatsword: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 50,
        weight: 6,
        range: null,
        damage: { numDie: 2, die: Die.D6, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.TwoHanded],
    }),
    Halberd: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 20,
        weight: 6,
        range: null,
        damage: { numDie: 1, die: Die.D10, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.Reach, WeaponProperty.TwoHanded],
    }),
    Lance: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 6,
        range: null,
        damage: { numDie: 1, die: Die.D12, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Reach, WeaponProperty.Special],
    }),
    Longsword: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 15,
        weight: 3,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Versatile],
    }),
    Maul: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 10,
        range: null,
        damage: { numDie: 2, die: Die.D6, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.TwoHanded],
    }),
    Morningstar: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 15,
        weight: 4,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [],
    }),
    Pike: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 5,
        weight: 18,
        range: null,
        damage: { numDie: 1, die: Die.D10, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Heavy, WeaponProperty.Reach, WeaponProperty.TwoHanded],
    }),
    Rapier: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 25,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Finesse],
    }),
    Scimitar: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 25,
        weight: 3,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Light],
    }),
    Shortsword: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 10,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Light, WeaponProperty.Monk],
    }),
    Trident: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 5,
        weight: 4,
        range: { normal: 20, long: 60 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Thrown, WeaponProperty.Versatile],
    }),
    WarPick: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 5,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [],
    }),
    Warhammer: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 15,
        weight: 2,
        range: null,
        damage: { numDie: 1, die: Die.D8, type: DamageType.Bludgeoning },
        description: null,
        properties: [WeaponProperty.Versatile],
    }),
    Whip: new WeaponObject({
        category: WeaponCategory.MartialMelee,
        cost: 2,
        weight: 3,
        range: null,
        damage: { numDie: 1, die: Die.D4, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Finesse, WeaponProperty.Reach],
    }),
    Blowgun: new WeaponObject({
        category: WeaponCategory.MartialRange,
        cost: 10,
        weight: 1,
        range: { normal: 25, long: 100 },
        damage: { amount: 1, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Loading],
    }),
    CrossbowHand: new WeaponObject({
        category: WeaponCategory.MartialRange,
        cost: 75,
        weight: 3,
        range: { normal: 30, long: 120 },
        damage: { numDie: 1, die: Die.D6, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Light, WeaponProperty.Loading],
    }),
    CrossbowHeavy: new WeaponObject({
        category: WeaponCategory.MartialRange,
        cost: 50,
        weight: 18,
        range: { normal: 100, long: 400 },
        damage: { numDie: 1, die: Die.D10, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Light, WeaponProperty.Loading, WeaponProperty.TwoHanded],
    }),
    Longbow: new WeaponObject({
        category: WeaponCategory.MartialRange,
        cost: 50,
        weight: 2,
        range: { normal: 150, long: 600 },
        damage: { numDie: 1, die: Die.D8, type: DamageType.Piercing },
        description: null,
        properties: [WeaponProperty.Ammunition, WeaponProperty.Heavy, WeaponProperty.TwoHanded],
    }),
    Net: new WeaponObject({
        category: WeaponCategory.MartialRange,
        cost: 1,
        weight: 3,
        range: { normal: 5, long: 15 },
        damage: { amount: 0, type: DamageType.Slashing },
        description: null,
        properties: [WeaponProperty.Thrown, WeaponProperty.Special],
    }),
};

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
