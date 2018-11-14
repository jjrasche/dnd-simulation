import { GearObject, GearCategory } from "./gear.enum";
import { EquipmentObject } from "./equipment.enum";
import { Equipment } from "./equipment";

export enum PackEnum {
    BurglarPack = "BurglarPack",
    DiplomatPack = "DiplomatPack",
    DungeoneerPack = "DungeoneerPack",
    EntertainerPack = "EntertainerPack",
    ExplorerPack = "ExplorerPack",
    PriestPack = "PriestPack",
    ScholarPack = "ScholarPack",
};

export class PackObject extends GearObject {
    contents: EquipmentObject[];
};

export const Pack: { [key in PackEnum]: PackObject } = {
    BurglarPack: {
        category: GearCategory.EquipmentPack,
        cost: 16,
        weight: null,
        description: "",
        contents: [
            Equipment.Backpack,
            Equipment.BallBearings,
            { ...Equipment.Candle, quantity: 5 },
            Equipment.Crowbar,
            Equipment.Hammer,
            { ...Equipment.HoodedLantern, quantity: 10 },
            Equipment.OilFlask,
            { ...Equipment.Piton, quantity: 2 },
            { ...Equipment.Rations, quantity: 5 },
            Equipment.HempenRope,
            Equipment.Tinderbox,
            Equipment.Waterskin
        ],
    },
    DiplomatPack: {
        category: GearCategory.EquipmentPack,
        cost: 39,
        weight: null,
        description: "",
        contents: [
            Equipment.CaseMapOrScroll,
            { ...Equipment.Chest, quantity: 2 },
            { ...Equipment.FineClothes, quantity: 5 },
            Equipment.Ink,
            Equipment.InkPen,
            Equipment.Lamp,
            { ...Equipment.OilFlask, quantity: 2 },
            { ...Equipment.PaperSheet, quantity: 5 },
            Equipment.PerfumeVial,
            Equipment.SealingWax,
            Equipment.Soap
        ],
    },
    DungeoneerPack: {
        category: GearCategory.EquipmentPack,
        cost: 12,
        weight: null,
        description: "",
        contents: [
            Equipment.Backpack,
            Equipment.Crowbar,
            Equipment.Hammer,
            { ...Equipment.Piton, quantity: 10 },
            { ...Equipment.Rations, quantity: 10 },
            { ...Equipment.HempenRope, quantity: 10 },
            Equipment.Torch,
            Equipment.Waterskin
        ],
    },
    EntertainerPack: {
        category: GearCategory.EquipmentPack,
        cost: 40,
        weight: null,
        description: "",
        contents: [
            Equipment.Backpack,
            Equipment.Bedroll,
            { ...Equipment.Candle, quantity: 2 },
            { ...Equipment.CostumeClothes, quantity: 5 },
            { ...Equipment.DisguiseKit, quantity: 5 },
            Equipment.Rations,
            Equipment.Waterskin,
        ],
    },
    ExplorerPack: {
        category: GearCategory.EquipmentPack,
        cost: 10,
        weight: null,
        description: "",
        contents: [
            Equipment.Backpack,
            Equipment.Bedroll,
            Equipment.DisguiseKit,
            Equipment.MessKit,
            { ...Equipment.Rations, quantity: 10 },
            { ...Equipment.Tinderbox, quantity: 10 },
            Equipment.Torch,
            Equipment.Waterskin,
        ]
    },
    PriestPack: {
        category: GearCategory.EquipmentPack,
        cost: 19,
        weight: null,
        description: "",
        contents: [
            Equipment.Backpack,
            Equipment.Blanket,
            { ...Equipment.Candle, quantity: 10 },
            Equipment.Rations,
            { ...Equipment.Tinderbox, quantity: 2 },
            Equipment.Waterskin,
        ]
    },
    ScholarPack: {
        category: GearCategory.EquipmentPack,
        cost: 40,
        weight: null,
        description: "",
        contents: [
            Equipment.Backpack,
            Equipment.Book,
            Equipment.Ink,
            Equipment.InkPen,
            { ...Equipment.ParchmentSheet, quantity: 10 },
        ]
    }, 
};

// Add EquipmentCategory.Tools to all tools.
// Object.keys(Pack).forEach(key => Pack[key].EquipmentCategory = EquipmentCategory.Tools);
