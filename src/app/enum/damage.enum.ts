import { Die } from "./die.enum";

export enum DamageTypeEnum {
    Acid = "Acid",
    Bludgeoning = "Bludgeoning",
    Cold = "Cold",
    Fire = "Fire",
    Force = "Force",
    Lightning = "Lightning",
    Necrotic = "Necrotic",
    Piercing = "Piercing",
    Poison = "Poison",
    Psychic = "Psychic",
    Radiant = "Radiant",
    Slashing = "Slashing",
    Thunder = "Thunder",
}

export interface DamageTypeObject {
    description: string;
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

export const DamageType: { [key in DamageTypeEnum]: DamageTypeObject } = {
    Acid: { description: "The corrosive spray of a black dragon’s breath and the dissolving enzymes secreted by a black pudding deal acid damage." },
    Bludgeoning: { description: "Blunt force attacks—hammers, falling, constriction, and the like—deal bludgeoning damage." },
    Cold: { description: "The infernal chill radiating from an ice devil’s spear and the frigid blast of a white dragon’s breath deal cold damage." },
    Fire: { description: "Red dragons breathe fire, and many spells conjure flames to deal fire damage." },
    Force: { description: "Force is pure magical energy focused into a damaging form. Most effects that deal force damage are spells, including magic missile and spiritual weapon." },
    Lightning: { description: "A lightning bolt spell and a blue dragon’s breath deal lightning damage." },
    Necrotic: { description: "Necrotic damage, dealt by certain undead and a spell such as chill touch, withers matter and even the soul." },
    Piercing: { description: "Puncturing and impaling attacks, including spears and monsters’ bites, deal piercing damage." },
    Poison: { description: "Venomous stings and the toxic gas of a green dragon’s breath deal poison damage." },
    Psychic: { description: "Mental abilities such as a mind flayer’s psionic blast deal psychic damage." },
    Radiant: { description: "Radiant damage, dealt by a cleric’s flame strike spell or an angel’s smiting weapon, sears the flesh like fire and overloads the spirit with power." },
    Slashing: { description: "Swords, axes, and monsters’ claws deal slashing damage." },
    Thunder: { description: "A concussive burst of sound, such as the effect of the thunderwave spell, deals thunder damage." },
}
