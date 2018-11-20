import { EquipmentObject, EquipmentObjectConstructor } from "./equipment.model";
import { ToolEnum } from "src/app/enum/equipment/tool.enum";
import { ToolCategory } from "src/app/enum/equipment/tool-category.enum";

interface IToolObject {
    category: ToolCategory;
}
type ToolConstructor = IToolObject & EquipmentObjectConstructor;

export class ToolObject extends EquipmentObject {
    category: ToolCategory;

    constructor(obj: ToolConstructor) {
        super(obj);
        this.category = obj.category;
    }
};

export const Tool: { [key in ToolEnum]: ToolObject } = {
    AlchemistSupplies: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 50,
        weight: 8,
    }),
    BrewerSupplies: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 20,
        weight: 9,
    }),
    CalligrapherSupplies: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 10,
        weight: 5,
    }),
    CarpenterTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 8,
        weight: 6,
    }),
    CartographerTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 15,
        weight: 6,
    }),
    CobblerTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 5,
        weight: 5,
    }),
    CookUtensils: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 1,
        weight: 8,
    }),
    GlassblowerTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 30,
        weight: 5,
    }),
    JewelerTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 25,
        weight: 2,
    }),
    LeatherworkerTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 5,
        weight: 5,
    }),
    MasonTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 10,
        weight: 8,
    }),
    PainterSupplies: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 10,
        weight: 5,
    }),
    PotterTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 10,
        weight: 3,
    }),
    SmithTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 20,
        weight: 8,
    }),
    TinkerTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 50,
        weight: 10,
    }),
    WeaverTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 1,
        weight: 5,
    }),
    WoodcarverTools: new ToolObject({
        description: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.",
        category: ToolCategory.ArtisanTools,
        cost: 1,
        weight: 5,
    }),
    DiceSet: new ToolObject({
        description: "This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.",
        category: ToolCategory.GamingSets,
        cost: .1,
        weight: 0,
    }),
    PlayingCardSet: new ToolObject({
        description: "This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.",
        category: ToolCategory.GamingSets,
        cost: .5,
        weight: 0,
    }),
    Bagpipes: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 30,
        weight: 6,
    }),
    Drum: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 6,
        weight: 3,
    }),
    Dulcimer: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 25,
        weight: 10,
    }),
    Flute: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 2,
        weight: 1,
    }),
    Lute: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 35,
        weight: 2,
    }),
    Lyre: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 30,
        weight: 2,
    }),
    Horn: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 3,
        weight: 2,
    }),
    PanFlute: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 12,
        weight: 2,
    }),
    Shawm: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 2,
        weight: 1,
    }),
    Viol: new ToolObject({
        description: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.",
        category: ToolCategory.MusicalInstrument,
        cost: 30,
        weight: 1,
    }),
    NavigatorTools: new ToolObject({
        description: "This set of instruments is used for navigation at sea. Proficiency with navigator’s tools lets you chart a ship’s course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea.",
        category: ToolCategory.OtherTools,
        cost: 25,
        weight: 2,
    }),
    ThievesTools: new ToolObject({
        description: "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.",
        category: ToolCategory.OtherTools,
        cost: 25,
        weight: 1,
    }),
};

export const AllTools: ToolObject[] = Object.keys(Tool).map(key => Tool[key]);
export const ToolCategories = Object.keys(ToolCategory) as ToolCategory[]
// couldn't think of a better way to do thsi dynamically
let tmp: any = {}
ToolCategories.forEach((category: ToolCategory) => tmp[category] = AllTools.filter(tool => tool.category === category));
export var ToolByCategory: { [key in ToolCategory]: ToolObject[] } = tmp;
