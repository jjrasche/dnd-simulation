export interface IBaseObject {
    key?: string;
    description: string;
}

/**
 * Object that should be inherited by all objects within system.
 * 
 * @param key allows for easy comparison between enums and objects e.g. applyToBuild.
 * @param description is often provided by SRD.
 */
export abstract class BaseObject implements IBaseObject {
    key?: string;
    description: string;
    // type: ObjectType;

    constructor(obj: IBaseObject) {
        this.description = obj.description;
        this.key = obj.key;
    }
}