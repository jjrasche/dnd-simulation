export type ObjectModifier = (obj: Object, key: string) => void;
export const addKeyModifier: ObjectModifier = (obj: Object, key: string): void => { obj[key].key = key };

/**
 * 
 * @param enums Array of enums to compare keys across.
 * returns an object with enum keys as key and value as number of ocurrences.
 * Complexity O(n) where n is number of enum keys between all enums.
 */
export const enumKeysCount = (enums: Object[]): Object => enums.reduce((acc: Object, currEnum: Object) => {
    // add this enums keys to any existing key, incrementing by 1 if that key already existed.
    let currEnumCount =
        Object.keys(currEnum).reduce((accInner: { string: number }, curr: string) =>
            ({ ...accInner, [curr]: (acc[curr] || 0) + 1 }), {});

    return { ...acc, ...currEnumCount };
}, {});

// add enum as the key property on all objects for tracking in arrays
/**
 * 
 * @param objects objects to make standardized changes to.
 * @param modifier function that makes changes to objects.
 * @param enums enums to verify uniqueness.
 */
export function modifyDataStructure(object: Object, objectModifiers: Array<ObjectModifier>) {
    // apply all modifiers to each property in object.
    Object.keys(object).forEach(key => {
        objectModifiers.forEach((modifier: ObjectModifier) => modifier(object, key))
    });
}

// verify enums that specify items in the object are all unique and no conflicts exist.
export function verifyEnumKeyUniqueness(enums: Array<Object>) {
    if (!!enums && enumsDuplicated(enums)) {
        throw (`The following keys are dupliactated on Object Enums: '${getDuplicatedEnumKeys(enums)}'`)
    }
}

/**
 * @param dict dictionary created from enumKeysCount with value being num occurrences of that key
 * returns list of all keys used more than once
 */
export const getDuplicatedEnumKeys = (enums: Object[]): Array<Object> => {
    const enumKeyCounts = enumKeysCount(enums);
    return Object.keys(enumKeyCounts).filter(key => enumKeyCounts[key] > 1);
}
export const enumsDuplicated = (enums: Object[]): boolean => getDuplicatedEnumKeys(enums).length > 0;
