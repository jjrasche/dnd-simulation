export interface settings<T> {
    inherint: Array<T>;
    selectable: optionalSettings<T>[];
}

export interface optionalSettings<T> {
    options: Array<T>;
    num: number;
}

export abstract class EnumBased {
    enum?: string
}