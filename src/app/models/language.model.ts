import { LanguageType } from "../enum/language-type.enum";
import { LanguageEnum } from "../enum/language.enum";

export interface LanguageObject {
    type: LanguageType;
    typicalSpeakers: string[];
    script: LanguageEnum;
}

// TODO: test that langauge deepspeech script logic is fine with null value
export const Language: { [key in LanguageEnum]: LanguageObject } = {
    Common: { type: LanguageType.Standard, typicalSpeakers: ["Humans"], script: LanguageEnum.Common },
    Dwarvish: { type: LanguageType.Standard, typicalSpeakers: ["Dwarves"], script: LanguageEnum.Dwarvish },
    Elvish: { type: LanguageType.Standard, typicalSpeakers: ["Elves"], script: LanguageEnum.Elvish },
    Giant: { type: LanguageType.Standard, typicalSpeakers: ["Ogres", "Giants"], script: LanguageEnum.Dwarvish },
    Gnomish: { type: LanguageType.Standard, typicalSpeakers: ["Gnomes"], script: LanguageEnum.Dwarvish },
    Goblin: { type: LanguageType.Standard, typicalSpeakers: ["Goblinoids"], script: LanguageEnum.Dwarvish },
    Halfling: { type: LanguageType.Standard, typicalSpeakers: ["Halflings"], script: LanguageEnum.Common },
    Orc: { type: LanguageType.Standard, typicalSpeakers: ["Orcs"], script: LanguageEnum.Dwarvish },
    Abyssal: { type: LanguageType.Exotic, typicalSpeakers: ["Demons"], script: LanguageEnum.Infernal },
    Celestial: { type: LanguageType.Exotic, typicalSpeakers: ["Celestials"], script: LanguageEnum.Celestial },
    Draconic: { type: LanguageType.Exotic, typicalSpeakers: ["Dragons", "Dragonborn"], script: LanguageEnum.Draconic },
    DeepSpeech: { type: LanguageType.Exotic, typicalSpeakers: ["Mindflayers", "Beholders"], script: null },
    Infernal: { type: LanguageType.Exotic, typicalSpeakers: ["Devils", "Tieflings"], script: LanguageEnum.Infernal },
    Primordial: { type: LanguageType.Exotic, typicalSpeakers: ["Elementa;s"], script: LanguageEnum.Dwarvish },
    Sylvan: { type: LanguageType.Exotic, typicalSpeakers: ["Fey Creatures"], script: LanguageEnum.Elvish },
    Undercommon: { type: LanguageType.Exotic, typicalSpeakers: ["Underdark Traders"], script: LanguageEnum.Elvish },
}
