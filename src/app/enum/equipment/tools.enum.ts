import { Skill } from "../skill.enum";
import { Die } from "../die.enum";
import { DamageTypeObject, DamageType } from "../damage.enum";
import { EquipmentObject, EquipmentCategory } from "./equipment.model";

export enum ToolEnum {
    AlchemistSupplies = "AlchemistSupplies",
    BrewerSupplies = "BrewerSupplies",
    CalligrapherSupplies = "CalligrapherSupplies",
    CarpenterTools = "CarpenterTools",
    CartographerTools = "CartographerTools",
    CobblerTools = "CobblerTools",
    CookUtensils = "CookUtensils",
    GlassblowerTools = "GlassblowerTools",
    JewelerTools = "JewelerTools",
    LeatherworkerTools = "LeatherworkerTools",
    MasonTools = "MasonTools",
    PainterSupplies = "PainterSupplies",
    PotterTools = "PotterTools",
    SmithTools = "SmithTools",
    TinkerTools = "TinkerTools",
    WeaverTools = "WeaverTools",
    WoodcarverTools = "WoodcarverTools",
    DiceSet = "DiceSet",
    PlayingCardSet = "PlayingCardSet",
    Bagpipes = "Bagpipes",
    Drum = "Drum",
    Dulcimer = "Dulcimer",
    Flute = "Flute",
    Lute = "Lute",
    Lyre = "Lyre",
    Horn = "Horn",
    PanFlute = "PanFlute",
    Shawm = "Shawm",
    Viol = "Viol",
    NavigatorTools = "NavigatorTools",
    ThievesTools = "ThievesTools",
};

export enum ToolCategory {
    ArtisanTools = "ArtisanTools",
    GamingSets = "GamingSets",
    MusicalInstrument = "MusicalInstrument",
    OtherTools = "OtherTools",
}

export class ToolObject extends EquipmentObject {
    category: ToolCategory;
};

export const Tool: { [key in ToolEnum]: ToolObject } = {
    AlchemistSupplies: {
        category: ToolCategory.ArtisanTools,
        cost: 50,
        weight: 8,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    BrewerSupplies: {
        category: ToolCategory.ArtisanTools,
        cost: 20,
        weight: 9,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    CalligrapherSupplies: {
        category: ToolCategory.ArtisanTools,
        cost: 10,
        weight: 5,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    CarpenterTools: {
        category: ToolCategory.ArtisanTools,
        cost: 8,
        weight: 6,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    CartographerTools: {
        category: ToolCategory.ArtisanTools,
        cost: 15,
        weight: 6,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    CobblerTools: {
        category: ToolCategory.ArtisanTools,
        cost: 5,
        weight: 5,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    CookUtensils: {
        category: ToolCategory.ArtisanTools,
        cost: 1,
        weight: 8,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    GlassblowerTools: {
        category: ToolCategory.ArtisanTools,
        cost: 30,
        weight: 5,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    JewelerTools: {
        category: ToolCategory.ArtisanTools,
        cost: 25,
        weight: 2,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    LeatherworkerTools: {
        category: ToolCategory.ArtisanTools,
        cost: 5,
        weight: 5,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    MasonTools: {
        category: ToolCategory.ArtisanTools,
        cost: 10,
        weight: 8,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    PainterSupplies: {
        category: ToolCategory.ArtisanTools,
        cost: 10,
        weight: 5,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    PotterTools: {
        category: ToolCategory.ArtisanTools,
        cost: 10,
        weight: 3,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    SmithTools: {
        category: ToolCategory.ArtisanTools,
        cost: 20,
        weight: 8,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    TinkerTools: {
        category: ToolCategory.ArtisanTools,
        cost: 50,
        weight: 10,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    WeaverTools: {
        category: ToolCategory.ArtisanTools,
        cost: 1,
        weight: 5,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    WoodcarverTools: {
        category: ToolCategory.ArtisanTools,
        cost: 1,
        weight: 5,
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
    },
    DiceSet: {
        category: ToolCategory.GamingSets,
        cost: .1,
        weight: 0,
        description: "This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.",
    },
    PlayingCardSet: {
        category: ToolCategory.GamingSets,
        cost: .5,
        weight: 0,
        description: "This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.",
    },
    Bagpipes: {
        category: ToolCategory.MusicalInstrument,
        cost: 30,
        weight: 6,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    Drum: {
        category: ToolCategory.MusicalInstrument,
        cost: 6,
        weight: 3,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    Dulcimer: {
        category: ToolCategory.MusicalInstrument,
        cost: 25,
        weight: 10,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    Flute: {
        category: ToolCategory.MusicalInstrument,
        cost: 2,
        weight: 1,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    Lute: {
        category: ToolCategory.MusicalInstrument,
        cost: 35,
        weight: 2,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    Lyre: {
        category: ToolCategory.MusicalInstrument,
        cost: 30,
        weight: 2,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    Horn: {
        category: ToolCategory.MusicalInstrument,
        cost: 3,
        weight: 2,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    PanFlute: {
        category: ToolCategory.MusicalInstrument,
        cost: 12,
        weight: 2,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    Shawm: {
        category: ToolCategory.MusicalInstrument,
        cost: 2,
        weight: 1,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    Viol: {
        category: ToolCategory.MusicalInstrument,
        cost: 30,
        weight: 1,
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
    },
    NavigatorTools: {
        category: ToolCategory.OtherTools,
        cost: 25,
        weight: 2,
        description: "This set of instruments is used for navigation at sea. Proficiency with navigator’s tools lets you chart a ship’s course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea.",
    },
    ThievesTools: {
        category: ToolCategory.OtherTools,
        cost: 25,
        weight: 1,
        description: "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.",
    },
};

// Add EquipmentCategory.Tools to all tools.
Object.keys(Tool).forEach(key => Tool[key].EquipmentCategory = EquipmentCategory.Tools);

export const AllTools: ToolObject[] = Object.keys(Tool).map(key => Tool[key]);
export const ToolCategories = Object.keys(ToolCategory) as ToolCategory[]
// couldn't think of a better way to do thsi dynamically
let tmp: any = {}
ToolCategories.forEach((category: ToolCategory) => tmp[category] = AllTools.filter(tool => tool.category === category));
export var ToolByCategory: { [key in ToolCategory]: ToolObject[] } = tmp;
