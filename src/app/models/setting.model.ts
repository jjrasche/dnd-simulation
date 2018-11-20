/**
 * starting_equipment":[\[{}A-Za-z0-9":/\.,’'\n\s]*]
 */

export interface settings<T> {
    // have all these settings
    inherent: Array<T>;
    // can make multiple choices about which settings to take 
    selectable: choiceSettings<T>[];
}

export interface choiceSettings<T> {
    // can choose from these options
    options: Array<T>;
    // can choose num things from these options
    num: number;
}

export interface settingsWithGroupedOptions<T> {
    // have all these settings
    inherent: Array<T>;
    // can make multiple choices about which settings to take 
    selectable: groupedChoiceSettings<T>[];
}

export interface groupedChoiceSettings<T> {
    // can choose from these groups
    groups: Array<T[]>;
    // can choose num groups from these options
    num: number;
}
