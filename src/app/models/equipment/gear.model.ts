import { EquipmentObject } from "./equipment.model";
import { GearEnum } from "src/app/enum/equipment/gear.enum";
import { GearCategory } from "src/app/enum/equipment/gear-category.enum";

export class GearObject extends EquipmentObject {
    category: GearCategory;
};

export const Gear: { [key in GearEnum]: GearObject } = {
    AcidVial: {
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 1,
        description: "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.",
    },
    AlchemistsFireFlask: {
        category: GearCategory.StandardGear,
        cost: 50,
        weight: 1,
        description: "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist’s fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.",
    },
    Arrow: {
        category: GearCategory.Ammunition,
        cost: .05,
        weight: 1,
        description: "",
    },
    BlowgunNeedle: {
        category: GearCategory.Ammunition,
        cost: .02,
        weight: 1,
        description: "",
    },
    CrossbowBolt: {
        category: GearCategory.Ammunition,
        cost: .05,
        weight: 1.5,
        description: "",
    },
    SlingBullet: {
        category: GearCategory.Ammunition,
        cost: .01,
        weight: 1.5,
        description: "",
    },
    Amulet: {
        category: GearCategory.HolySymbol,
        cost: 5,
        weight: 1,
        description: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
    },
    AntitoxinVial: {
        category: GearCategory.StandardGear,
        cost: 50,
        weight: 0,
        description: "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.",
    },
    Crystal: {
        category: GearCategory.Arcanefocus,
        cost: 10,
        weight: 1,
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
    },
    Orb: {
        category: GearCategory.Arcanefocus,
        cost: 20,
        weight: 3,
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
    },
    Rod: {
        category: GearCategory.Arcanefocus,
        cost: 10,
        weight: 2,
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
    },
    Staff: {
        category: GearCategory.Arcanefocus,
        cost: 5,
        weight: 4,
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
    },
    Wand: {
        category: GearCategory.Arcanefocus,
        cost: 10,
        weight: 1,
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
    },
    Backpack: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 5,
        description: "",
    },
    BallBearings: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 2,
        description: "(bag of 1,000) As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn’t need to make the save.",
    },
    Barrel: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 70,
        description: "",
    },
    Basket: {
        category: GearCategory.StandardGear,
        cost: .4,
        weight: 2,
        description: "",
    },
    Bedroll: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 7,
        description: "",
    },
    Bell: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 0,
        description: "",
    },
    Blanket: {
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 3,
        description: "",
    },
    BlockAndTackle: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 5,
        description: "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift.",
    },
    Book: {
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 5,
        description: "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook (described later in this section).",
    },
    GlassBottle: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 2,
        description: "",
    },
    Bucket: {
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 2,
        description: "",
    },
    Caltrops: {
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 2,
        description: "As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the creature’s walking speed by 10 feet until the creature regains at least 1 hit point. A creature moving through the area at half speed doesn’t need to make the save.",
    },
    Candle: {
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 0,
        description: "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
    },
    CaseCrossbowBolt: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 1,
        description: "This wooden case can hold up to twenty crossbow bolts.",
    },
    CaseMapOrScroll: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 1,
        description: "This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.",
    },
    Chain: {
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 10,
        description: "(10 feet) A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.",
    },
    Chalk: {
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 0,
        description: "(1 piece)",
    },
    Chest: {
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 25,
        description: "",
    },
    CommonClothes: {
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 3,
        description: "",
    },
    CostumeClothes: {
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 4,
        description: "",
    },
    FineClothes: {
        category: GearCategory.StandardGear,
        cost: 15,
        weight: 6,
        description: "",
    },
    TravelersClothes: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 4,
        description: "",
    },
    ComponentPouch: {
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 2,
        description: " A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell’s description).",
    },
    Crowbar: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 5,
        description: "Using a crowbar grants advantage to Strength checks where the crowbar’s leverage can be applied.",
    },
    SprigOfMistletoe: {
        category: GearCategory.Druidicfocus,
        cost: 1,
        weight: 0,
        description: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.",
    },
    Totem: {
        category: GearCategory.Druidicfocus,
        cost: 1,
        weight: 0,
        description: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.",
    },
    WoodenStaff: {
        category: GearCategory.Druidicfocus,
        cost: 5,
        weight: 4,
        description: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.",
    },
    YewWand: {
        category: GearCategory.Druidicfocus,
        cost: 10,
        weight: 1,
        description: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.",
    },
    Emblem: {
        category: GearCategory.HolySymbol,
        cost: 5,
        weight: 0,
        description: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
    },
    FishingTackle: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 4,
        description: "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.",
    },
    FlaskOrTankard: {
        category: GearCategory.StandardGear,
        cost: .02,
        weight: 1,
        description: "",
    },
    GrapplingHook: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 4,
        description: "",
    },
    Hammer: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 3,
        description: "",
    },
    SledgeHammer: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 10,
        description: "",
    },
    HolyWaterFlask: {
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 1,
        description: "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage. A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.",
    },
    Hourglass: {
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 1,
        description: "",
    },
    HuntingTrap: {
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 25,
        description: "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.",
    },
    Ink: {
        category: GearCategory.StandardGear,
        cost: 10,
        weight: 0,
        description: "(1 ounce bottle)",
    },
    InkPen: {
        category: GearCategory.StandardGear,
        cost: .02,
        weight: 0,
        description: "",
    },
    JugOrPitcher: {
        category: GearCategory.StandardGear,
        cost: .02,
        weight: 4,
        description: "",
    },
    ClimbersKit: {
        category: GearCategory.Kit,
        cost: 25,
        weight: 12,
        description: "A climber’s kit includes special pitons, boot tips, gloves, and a harness. You can use the climber’s kit as an action to anchor yourself; when you do, you can’t fall more than 25 feet from the point where you anchored yourself, and you can’t climb more than 25 feet away from that point without undoing the anchor.",
    },
    DisguiseKit: {
        category: GearCategory.Kit,
        cost: 25,
        weight: 3,
        description: "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.",
    },
    ForgeryKit: {
        category: GearCategory.Kit,
        cost: 15,
        weight: 5,
        description: "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document.",
    },
    HerbalismKit: {
        category: GearCategory.Kit,
        cost: 5,
        weight: 3,
        description: "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing.",
    },
    HealersKit: {
        category: GearCategory.Kit,
        cost: 5,
        weight: 3,
        description: "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.",
    },
    MessKit: {
        category: GearCategory.Kit,
        cost: .2,
        weight: 1,
        description: "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.",
    },
    PoisonersKit: {
        category: GearCategory.Kit,
        cost: 50,
        weight: 2,
        description: "A poisoner’s kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.",
    },
    Ladder: {
        category: GearCategory.StandardGear,
        cost: .1,
        weight: 25,
        description: "(10-foot)",
    },
    Lamp: {
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 1,
        description: "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.",
    },
    BullseyeLantern: {
        category: GearCategory.StandardGear,
        cost: 10,
        weight: 2,
        description: "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.",
    },
    HoodedLantern: {
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 2,
        description: "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius.",
    },
    Lock: {
        category: GearCategory.StandardGear,
        cost: 10,
        weight: 1,
        description: "A key is provided with the lock. Without the key, a creature proficient with thieves’ tools can pick this lock with a successful DC 15 Dexterity check. Your GM may decide that better locks are available for higher prices.",
    },
    MagnifyingGlass: {
        category: GearCategory.StandardGear,
        cost: 100,
        weight: 0,
        description: "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.",
    },
    Manacles: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 6,
        description: "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves’ tools can pick the manacles’ lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.",
    },
    SteelMirror: {
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 0.5,
        description: "",
    },
    OilFlask: {
        category: GearCategory.StandardGear,
        cost: .1,
        weight: 1,
        description: "Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.",
    },
    PaperSheet: {
        category: GearCategory.StandardGear,
        cost: .2,
        weight: 0,
        description: "",
    },
    ParchmentSheet: {
        category: GearCategory.StandardGear,
        cost: .1,
        weight: 0,
        description: "",
    },
    PerfumeVial: {
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 0,
        description: "",
    },
    MinersPick: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 10,
        description: "",
    },
    Piton: {
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 0.25,
        description: "",
    },
    PoisonVial: {
        category: GearCategory.StandardGear,
        cost: 100,
        weight: 0,
        description: "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.",
    },
    Pole: {
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 7,
        description: "(10-foot)",
    },
    IronPot: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 10,
        description: "",
    },
    PotionOfHealing: {
        category: GearCategory.StandardGear,
        cost: 50,
        weight: 0.5,
        description: "A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action.",
    },
    Pouch: {
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 1,
        description: "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch (described earlier in this section).",
    },
    Quiver: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 1,
        description: "A quiver can hold up to 20 arrows.",
    },
    PortableRam: {
        category: GearCategory.StandardGear,
        cost: 4,
        weight: 35,
        description: "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.",
    },
    Rations: {
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 2,
        description: "(1 day) Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.",
    },
    Reliquary: {
        category: GearCategory.HolySymbol,
        cost: 5,
        weight: 2,
        description: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
    },
    Robes: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 4,
        description: "",
    },
    HempenRope: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 10,
        description: "(50 feet) Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.",
    },
    SilkRope: {
        category: GearCategory.StandardGear,
        cost: 10,
        weight: 5,
        description: "(50 feet) Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.",
    },
    Sack: {
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 0.5,
        description: "",
    },
    MerchantsScale: {
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 3,
        description: "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth.",
    },
    SealingWax: {
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 0,
        description: "",
    },
    Shovel: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 5,
        description: "",
    },
    SignalWhistle: {
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 0,
        description: "",
    },
    SignetRing: {
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 0,
        description: "",
    },
    Soap: {
        category: GearCategory.StandardGear,
        cost: .02,
        weight: 0,
        description: "",
    },
    Spellbook: {
        category: GearCategory.StandardGear,
        cost: 50,
        weight: 3,
        description: "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.",
    },
    IronSpike: {
        category: GearCategory.StandardGear,
        cost: .1,
        weight: 5,
        description: "",
    },
    Spyglass: {
        category: GearCategory.StandardGear,
        cost: 1000,
        weight: 1,
        description: "Objects viewed through a spyglass are magnified to twice their size.",
    },
    TwoPersonTent: {
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 20,
        description: "A simple and portable canvas shelter, a tent sleeps two.",
    },
    Tinderbox: {
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 1,
        description: "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action. Lighting any other fire takes 1 minute.",
    },
    Torch: {
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 1,
        description: "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.",
    },
    Vial: {
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 0,
        description: "",
    },
    Waterskin: {
        category: GearCategory.StandardGear,
        cost: .2,
        weight: 5,
        description: "",
    },
    Whetstone: {
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 1,
        description: "",
    },
};

export const AllGear: GearObject[] = Object.keys(Gear).map(key => Gear[key]);
export const GearCategories = Object.keys(GearCategory) as GearCategory[]

// couldn't think of a better way to do thsi dynamically
let gearByCategory: any = {}
GearCategories.forEach((category: GearCategory) => gearByCategory[category] = AllGear.filter(gear => gear.category === category));
export var GearByCategory: { [key in GearCategory]: GearObject[] } = gearByCategory;
