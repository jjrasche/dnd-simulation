import { getDeepProperty, setDeepProperty } from "./build.object";

describe('BuildObject', () => {

    it("getDeepProperty, givien null object, will throw", () => {
        let call = () => getDeepProperty(null, null);
        expect(call).toThrow();
    });

    it("getDeepProperty, if object doesn't contain first order key, will throw", () => {
        let call = () => getDeepProperty({ a: 5 }, "b");
        expect(call).toThrow();
    });

    it("getDeepProperty, if object doesn't contain second order key, will throw", () => {
        let call = () => getDeepProperty({ a: { b: { c: 5 } } }, "b.c.a");
        expect(call).toThrow();
    });

    it("getDeepProperty, when object is {a: 5} and using key a, will return 5", () => {
        let actual = getDeepProperty({ a: 5 }, "a");
        expect(actual).toEqual(5);
    });

    it("getDeepProperty, when object is {a:{b:{c: 5}}} and using key a.b, will return {c:5}", () => {
        let actual = getDeepProperty({ a: { b: { c: 5 } } }, "a.b");
        expect(actual).toEqual({ c: 5 });
    });

    it("getDeepProperty, when object is {a:{b:{c: 5}}} and using key a.b.c, will return 5", () => {
        let actual = getDeepProperty({ a: { b: { c: 5 } } }, "a.b.c");
        expect(actual).toEqual(5);
    });

    it("getDeepProperty, must use '.' to access 2nd+ order keys, will throw", () => {
        let call = () => getDeepProperty({ a: { b: { c: 5 } } }, "a,b,c");
        expect(call).toThrow();
    });

    it("setDeepProperty, when object is {a:{b:{c: 5}}} using key a.b.c and operation adding 1, will return {a:{b:{c: 6}}} ", () => {
        let actual = { a: { b: { c: 5 } } };
        setDeepProperty(actual, "a.b.c", (prop: any, key: string) => prop[key] += 1);
        expect(actual).toEqual({ a: { b: { c: 6 } } } );
    });

    it("setDeepProperty, when object is {a:{b:{c: 5}}} using key a.b.c and operation = 1, will return {a:{b:{c: 1}}} ", () => {
        let actual = { a: { b: { c: 5 } } };
        setDeepProperty(actual, "a.b.c", (prop: any, key: string) => prop[key] = 1);
        expect(actual).toEqual({ a: { b: { c: 1 } } });
    });

    it("setDeepProperty, push to array, when object is {a:{b:[5]}} using key a.b and operation push 7, will return {a:{b:[5, 7]}} ", () => {
        let actual = { a: { b: [5] } };
        setDeepProperty(actual, "a.b", (prop: Array<any>) => prop.push(7));
        expect(actual).toEqual({ a: { b: [5,7] } });
    });

    it("setDeepProperty, remove from array, when object is {a:{b:[5,7]}} using key a.b and operation remove 7, will return {a:{b:[5]}} ", () => {
        let actual = { a: { b: [5, 7] } };
        setDeepProperty(actual, "a.b", (prop: Array<any>) => {
            let index = prop.findIndex(p => p == 7);
            prop.splice(index, 1)
        });
        expect(actual).toEqual({ a: { b: [5] } });
    });
});
