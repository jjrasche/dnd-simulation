import { ActionableObject } from "../models/action.model";
import { Build } from "../models/build.model";

export enum ComponentEnum {
    Verbal = "V",
    Somatic = "S",
    Material = "M",
}

export interface ComponentObject extends ActionableObject {
    description: string;
}

export const Component: { [key in ComponentEnum]: ComponentObject } = {
    V: { 
        description: "Most spells require the chanting of mystic words. The words themselves aren’t the source of the spell’s power; rather, the particular combination of sounds, with specific pitch and resonance, sets the threads of magic in motion. Thus, a character who is gagged or in an area of silence, such as one created by the silence spell, can’t cast a spell with a verbal component.",
        can: (b: Build): boolean => true,

    },
    S: {
        description: "Spellcasting gestures might include a forceful gesticulation or an intricate set of gestures. If a spell requires a somatic component, the caster must have free use of at least one hand to perform these gestures.",
        can: (b: Build): boolean => true,
    },
    M: {
        description: "Casting som e spells requires particular objects, specified in parentheses in the component entry. A character can use a component pouch or a spellcasting focus (found in chapter 5) in place of the components specified for a spell. But if a cost is indicated for a component, a character must have that specific component before he or she can cast the spell. If a spell states that a material component is consumed by the spell, the caster must provide this component for each casting of the spell. A spellcaster must have a hand free to access these components, but it can be the same hand that he or she uses to perform somatic components.",
        can: (b: Build): boolean => true,
    }
}
