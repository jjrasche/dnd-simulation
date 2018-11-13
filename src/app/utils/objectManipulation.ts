import { Build } from "../models/build.model";

export function copyBuild<T extends Object>(obj: T): T {
    // copy all the methods over with object.assign
    let factory = new Factory<Build>(Build);
    let tmp: T = Object.assign(factory.getNew(), obj);

    // let tmpProps: T = propertyCopy(obj);
    // Object.keys(tmpProps).forEach(key => {
    //     tmp[key] = tmpProps[key];
    // });

    return tmp;
}

export function propertyCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export class Factory<T> {
    constructor(private type: new () => T) { }

    getNew(): T {
        return new this.type();
    }
}  