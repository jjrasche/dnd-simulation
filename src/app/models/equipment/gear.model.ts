import { EquipmentObject, EquipmentObjectConstructor, BaseBuildAffectingEquipmentObject, BaseBuildAffectingEquipmentConstructor } from "./equipment.model";
import { GearEnum } from "src/app/enum/equipment/gear.enum";
import { GearCategory } from "src/app/enum/equipment/gear-category.enum";

export interface IGearObject {
    category: GearCategory;
}
type GearConstructor = IGearObject & BaseBuildAffectingEquipmentConstructor;

export class GearObject extends BaseBuildAffectingEquipmentObject {
    category: GearCategory;

    constructor(obj: GearConstructor) {
        super(obj);
        this.category = obj.category;
    }
};

export const Gear: { [key in GearEnum]: GearObject } = {
    AcidVial: new GearObject({
        description: "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.",
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 1,
    }),
    AlchemistsFireFlask: new GearObject({
        description: "This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist’s fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.",
        category: GearCategory.StandardGear,
        cost: 50,
        weight: 1,
    }),
    Arrow: new GearObject({
        description: "",
        category: GearCategory.Ammunition,
        cost: .05,
        weight: 1,
    }),
    BlowgunNeedle: new GearObject({
        description: "",
        category: GearCategory.Ammunition,
        cost: .02,
        weight: 1,
    }),
    CrossbowBolt: new GearObject({
        description: "",
        category: GearCategory.Ammunition,
        cost: .05,
        weight: 1.5,
    }),
    SlingBullet: new GearObject({
        description: "",
        category: GearCategory.Ammunition,
        cost: .01,
        weight: 1.5,
    }),
    Amulet: new GearObject({
        description: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
        category: GearCategory.HolySymbol,
        cost: 5,
        weight: 1,
    }),
    AntitoxinVial: new GearObject({
        description: "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.",
        category: GearCategory.StandardGear,
        cost: 50,
        weight: 0,
    }),
    Crystal: new GearObject({
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
        category: GearCategory.Arcanefocus,
        cost: 10,
        weight: 1,
    }),
    Orb: new GearObject({
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
        category: GearCategory.Arcanefocus,
        cost: 20,
        weight: 3,
    }),
    Rod: new GearObject({
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
        category: GearCategory.Arcanefocus,
        cost: 10,
        weight: 2,
    }),
    Staff: new GearObject({
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
        category: GearCategory.Arcanefocus,
        cost: 5,
        weight: 4,
    }),
    Wand: new GearObject({
        description: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.",
        category: GearCategory.Arcanefocus,
        cost: 10,
        weight: 1,
    }),
    Backpack: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 5,
    }),
    BallBearings: new GearObject({
        description: "(bag of 1,000) As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn’t need to make the save.",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 2,
    }),
    Barrel: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 70,
    }),
    Basket: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .4,
        weight: 2,
    }),
    Bedroll: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 7,
    }),
    Bell: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 0,
    }),
    Blanket: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 3,
    }),
    BlockAndTackle: new GearObject({
        description: "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift.",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 5,
    }),
    Book: new GearObject({
        description: "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook (described later in this section).",
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 5,
    }),
    GlassBottle: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 2,
    }),
    Bucket: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 2,
    }),
    Caltrops: new GearObject({
        description: "As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the creature’s walking speed by 10 feet until the creature regains at least 1 hit point. A creature moving through the area at half speed doesn’t need to make the save.",
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 2,
    }),
    Candle: new GearObject({
        description: "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 0,
    }),
    CaseCrossbowBolt: new GearObject({
        description: "This wooden case can hold up to twenty crossbow bolts.",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 1,
    }),
    CaseMapOrScroll: new GearObject({
        description: "This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 1,
    }),
    Chain: new GearObject({
        description: "(10 feet) A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.",
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 10,
    }),
    Chalk: new GearObject({
        description: "(1 piece)",
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 0,
    }),
    Chest: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 25,
    }),
    CommonClothes: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 3,
    }),
    CostumeClothes: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 4,
    }),
    FineClothes: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 15,
        weight: 6,
    }),
    TravelersClothes: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 4,
    }),
    ComponentPouch: new GearObject({
        description: " A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell’s description).",
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 2,
    }),
    Crowbar: new GearObject({
        description: "Using a crowbar grants advantage to Strength checks where the crowbar’s leverage can be applied.",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 5,
    }),
    SprigOfMistletoe: new GearObject({
        description: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.",
        category: GearCategory.Druidicfocus,
        cost: 1,
        weight: 0,
    }),
    Totem: new GearObject({
        description: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.",
        category: GearCategory.Druidicfocus,
        cost: 1,
        weight: 0,
    }),
    WoodenStaff: new GearObject({
        description: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.",
        category: GearCategory.Druidicfocus,
        cost: 5,
        weight: 4,
    }),
    YewWand: new GearObject({
        description: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.",
        category: GearCategory.Druidicfocus,
        cost: 10,
        weight: 1,
    }),
    Emblem: new GearObject({
        description: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
        category: GearCategory.HolySymbol,
        cost: 5,
        weight: 0,
    }),
    FishingTackle: new GearObject({
        description: "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 4,
    }),
    FlaskOrTankard: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .02,
        weight: 1,
    }),
    GrapplingHook: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 4,
    }),
    Hammer: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 3,
    }),
    SledgeHammer: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 10,
    }),
    HolyWaterFlask: new GearObject({
        description: "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage. A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.",
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 1,
    }),
    Hourglass: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 25,
        weight: 1,
    }),
    HuntingTrap: new GearObject({
        description: "When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.",
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 25,
    }),
    Ink: new GearObject({
        description: "(1 ounce bottle)",
        category: GearCategory.StandardGear,
        cost: 10,
        weight: 0,
    }),
    InkPen: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .02,
        weight: 0,
    }),
    JugOrPitcher: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .02,
        weight: 4,
    }),
    ClimbersKit: new GearObject({
        description: "A climber’s kit includes special pitons, boot tips, gloves, and a harness. You can use the climber’s kit as an action to anchor yourself; when you do, you can’t fall more than 25 feet from the point where you anchored yourself, and you can’t climb more than 25 feet away from that point without undoing the anchor.",
        category: GearCategory.Kit,
        cost: 25,
        weight: 12,
    }),
    DisguiseKit: new GearObject({
        description: "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.",
        category: GearCategory.Kit,
        cost: 25,
        weight: 3,
    }),
    ForgeryKit: new GearObject({
        description: "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document.",
        category: GearCategory.Kit,
        cost: 15,
        weight: 5,
    }),
    HerbalismKit: new GearObject({
        description: "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing.",
        category: GearCategory.Kit,
        cost: 5,
        weight: 3,
    }),
    HealersKit: new GearObject({
        description: "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.",
        category: GearCategory.Kit,
        cost: 5,
        weight: 3,
    }),
    MessKit: new GearObject({
        description: "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.",
        category: GearCategory.Kit,
        cost: .2,
        weight: 1,
    }),
    PoisonersKit: new GearObject({
        description: "A poisoner’s kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.",
        category: GearCategory.Kit,
        cost: 50,
        weight: 2,
    }),
    Ladder: new GearObject({
        description: "(10-foot)",
        category: GearCategory.StandardGear,
        cost: .1,
        weight: 25,
    }),
    Lamp: new GearObject({
        description: "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.",
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 1,
    }),
    BullseyeLantern: new GearObject({
        description: "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.",
        category: GearCategory.StandardGear,
        cost: 10,
        weight: 2,
    }),
    HoodedLantern: new GearObject({
        description: "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius.",
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 2,
    }),
    Lock: new GearObject({
        description: "A key is provided with the lock. Without the key, a creature proficient with thieves’ tools can pick this lock with a successful DC 15 Dexterity check. Your GM may decide that better locks are available for higher prices.",
        category: GearCategory.StandardGear,
        cost: 10,
        weight: 1,
    }),
    MagnifyingGlass: new GearObject({
        description: "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.",
        category: GearCategory.StandardGear,
        cost: 100,
        weight: 0,
    }),
    Manacles: new GearObject({
        description: "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves’ tools can pick the manacles’ lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 6,
    }),
    SteelMirror: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 0.5,
    }),
    OilFlask: new GearObject({
        description: "Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.",
        category: GearCategory.StandardGear,
        cost: .1,
        weight: 1,
    }),
    PaperSheet: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .2,
        weight: 0,
    }),
    ParchmentSheet: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .1,
        weight: 0,
    }),
    PerfumeVial: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 0,
    }),
    MinersPick: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 10,
    }),
    Piton: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 0.25,
    }),
    PoisonVial: new GearObject({
        description: "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.",
        category: GearCategory.StandardGear,
        cost: 100,
        weight: 0,
    }),
    Pole: new GearObject({
        description: "(10-foot)",
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 7,
    }),
    IronPot: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 10,
    }),
    PotionOfHealing: new GearObject({
        description: "A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action.",
        category: GearCategory.StandardGear,
        cost: 50,
        weight: 0.5,
    }),
    Pouch: new GearObject({
        description: "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch (described earlier in this section).",
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 1,
    }),
    Quiver: new GearObject({
        description: "A quiver can hold up to 20 arrows.",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 1,
    }),
    PortableRam: new GearObject({
        description: "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.",
        category: GearCategory.StandardGear,
        cost: 4,
        weight: 35,
    }),
    Rations: new GearObject({
        description: "(1 day) Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.",
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 2,
    }),
    Reliquary: new GearObject({
        description: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.",
        category: GearCategory.HolySymbol,
        cost: 5,
        weight: 2,
    }),
    Robes: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 4,
    }),
    HempenRope: new GearObject({
        description: "(50 feet) Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 10,
    }),
    SilkRope: new GearObject({
        description: "(50 feet) Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.",
        category: GearCategory.StandardGear,
        cost: 10,
        weight: 5,
    }),
    Sack: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 0.5,
    }),
    MerchantsScale: new GearObject({
        description: "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth.",
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 3,
    }),
    SealingWax: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 0,
    }),
    Shovel: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 5,
    }),
    SignalWhistle: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .05,
        weight: 0,
    }),
    SignetRing: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 5,
        weight: 0,
    }),
    Soap: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .02,
        weight: 0,
    }),
    Spellbook: new GearObject({
        description: "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.",
        category: GearCategory.StandardGear,
        cost: 50,
        weight: 3,
    }),
    IronSpike: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .1,
        weight: 5,
    }),
    Spyglass: new GearObject({
        description: "Objects viewed through a spyglass are magnified to twice their size.",
        category: GearCategory.StandardGear,
        cost: 1000,
        weight: 1,
    }),
    TwoPersonTent: new GearObject({
        description: "A simple and portable canvas shelter, a tent sleeps two.",
        category: GearCategory.StandardGear,
        cost: 2,
        weight: 20,
    }),
    Tinderbox: new GearObject({
        description: "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action. Lighting any other fire takes 1 minute.",
        category: GearCategory.StandardGear,
        cost: .5,
        weight: 1,
    }),
    Torch: new GearObject({
        description: "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.",
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 1,
    }),
    Vial: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: 1,
        weight: 0,
    }),
    Waterskin: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .2,
        weight: 5,
    }),
    Whetstone: new GearObject({
        description: "",
        category: GearCategory.StandardGear,
        cost: .01,
        weight: 1,
    }),
};

export const AllGear: GearObject[] = Object.keys(Gear).map(key => Gear[key]);
export const GearCategories = Object.keys(GearCategory) as GearCategory[]

// couldn't think of a better way to do thsi dynamically
let gearByCategory: any = {}
GearCategories.forEach((category: GearCategory) => gearByCategory[category] = AllGear.filter(gear => gear.category === category));
export var GearByCategory: { [key in GearCategory]: GearObject[] } = gearByCategory;
