import { GearObject, Gear, IGearObject } from "./gear.model";
import { PackEnum } from "src/app/enum/equipment/pack.enum";
import { GearCategory } from "src/app/enum/equipment/gear-category.enum";
import { BaseBuildAffectingEquipmentConstructor } from "./equipment.model";

interface IPackObject {
    contents: GearObject[];
}
type PackConstructor = IGearObject & IPackObject & BaseBuildAffectingEquipmentConstructor;


export class PackObject extends GearObject {
    contents: GearObject[];
    
    constructor(obj: PackConstructor) {
        super(obj);
        this.category = obj.category;
    }
};

export const Pack: { [key in PackEnum]: PackObject } = {
    BurglarPack: new PackObject({
        category: GearCategory.EquipmentPack,
        cost: 16,
        weight: null,
        description: "",
        contents: [
            Gear.Backpack,
            Gear.BallBearings,
            { ...Gear.Candle, quantity: 5 },
            Gear.Crowbar,
            Gear.Hammer,
            { ...Gear.HoodedLantern, quantity: 10 },
            Gear.OilFlask,
            { ...Gear.Piton, quantity: 2 },
            { ...Gear.Rations, quantity: 5 },
            Gear.HempenRope,
            Gear.Tinderbox,
            Gear.Waterskin
        ],
    }),
    DiplomatPack: new PackObject({
        category: GearCategory.EquipmentPack,
        cost: 39,
        weight: null,
        description: "",
        contents: [
            Gear.CaseMapOrScroll,
            { ...Gear.Chest, quantity: 2 },
            { ...Gear.FineClothes, quantity: 5 },
            Gear.Ink,
            Gear.InkPen,
            Gear.Lamp,
            { ...Gear.OilFlask, quantity: 2 },
            { ...Gear.PaperSheet, quantity: 5 },
            Gear.PerfumeVial,
            Gear.SealingWax,
            Gear.Soap
        ],
    }),
    DungeoneerPack: new PackObject({
        category: GearCategory.EquipmentPack,
        cost: 12,
        weight: null,
        description: "",
        contents: [
            Gear.Backpack,
            Gear.Crowbar,
            Gear.Hammer,
            { ...Gear.Piton, quantity: 10 },
            { ...Gear.Rations, quantity: 10 },
            { ...Gear.HempenRope, quantity: 10 },
            Gear.Torch,
            Gear.Waterskin
        ],
    }),
    EntertainerPack: new PackObject({
        category: GearCategory.EquipmentPack,
        cost: 40,
        weight: null,
        description: "",
        contents: [
            Gear.Backpack,
            Gear.Bedroll,
            { ...Gear.Candle, quantity: 2 },
            { ...Gear.CostumeClothes, quantity: 5 },
            { ...Gear.DisguiseKit, quantity: 5 },
            Gear.Rations,
            Gear.Waterskin,
        ],
    }),
    ExplorerPack: new PackObject({
        category: GearCategory.EquipmentPack,
        cost: 10,
        weight: null,
        description: "",
        contents: [
            Gear.Backpack,
            Gear.Bedroll,
            Gear.DisguiseKit,
            Gear.MessKit,
            { ...Gear.Rations, quantity: 10 },
            { ...Gear.Tinderbox, quantity: 10 },
            Gear.Torch,
            Gear.Waterskin,
        ]
    }),
    PriestPack: new PackObject({
        category: GearCategory.EquipmentPack,
        cost: 19,
        weight: null,
        description: "",
        contents: [
            Gear.Backpack,
            Gear.Blanket,
            { ...Gear.Candle, quantity: 10 },
            Gear.Rations,
            { ...Gear.Tinderbox, quantity: 2 },
            Gear.Waterskin,
        ]
    }),
    ScholarPack: new PackObject({
        category: GearCategory.EquipmentPack,
        cost: 40,
        weight: null,
        description: "",
        contents: [
            Gear.Backpack,
            Gear.Book,
            Gear.Ink,
            Gear.InkPen,
            { ...Gear.ParchmentSheet, quantity: 10 },
        ]
    }), 
};
