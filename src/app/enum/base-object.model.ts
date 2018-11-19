export interface IBaseObject {
    key?: string;
    description: string;
}


export class BaseObject {
    // allows comparisons between objects to easily be made
    key?: string;
    description: string;
    // type: ObjectType;

    constructor(obj: IBaseObject) {
        this.description = obj.description;
        this.key = obj.key;
    }
}
