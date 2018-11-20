import { verifyEnumKeyUniqueness, modifyDataStructure, addKeyModifier, enumKeysCount, enumsDuplicated } from "./model-initialization";

describe('BuildModel', () => {

    it("Equipment Object ", () => {
        enum OneEnum {
            A = "A",
            B = "B",
        };
        const OneData: { [key in OneEnum]: Object } = {
            A: {},
            B: {}
        };
        enum TwoEnum {
            A = "A",
            C = "C",
        };
        const TwoData: { [key in TwoEnum]: Object } = {
            A: {},
            C: {}
        };

        const ObjectEnums = [OneEnum, TwoEnum];
        const ObjectData = { ...OneData, ...TwoData };

        expect(() => verifyEnumKeyUniqueness(ObjectEnums)).toThrow();
        modifyDataStructure(ObjectData, [addKeyModifier]);
        expect(OneData.B["key"]).toBeDefined();
        expect(TwoData.A["key"]).toBeDefined();
        expect(TwoData.C["key"]).toBeDefined();
        // since this dupliate is overwritten by TwoData.A, it is not apart of ObjectData and will not get the key property
        expect(OneData.A["key"]).toBeUndefined();
    });

    it("duplicate enum check: given enums that do use duplicate keys, then enumsDuplicate is true", () => {
        enum One {
            A = "A",
            B = "B",
        };
        enum Two {
            A = "A",
            C = "C",
        };
        let enums = [One, Two];

        expect(enumKeysCount(enums)).toEqual({A: 2, B: 1, C: 1});
        expect(enumsDuplicated(enums)).toBe(true);
    });

    it("duplicate enum check: given enums that do not use duplicate keys, then enumsDuplicate is false", () => {
        enum One {
            A = "A",
            B = "B",
        };
        enum Two {
            C = "C",
            D = "D",
        };
        let enums = [One, Two];

        expect(enumKeysCount(enums)).toEqual({ A: 1, B: 1, C: 1, D: 1 });
        expect(enumsDuplicated(enums)).toBe(false);
    });



    
});