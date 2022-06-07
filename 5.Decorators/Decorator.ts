function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}
//@Logger("Login person")
class Person {
    name = "Max";
    constructor() {
        console.log("create an object");
    }
}

/* Property Decorators  */
function Log(target: any, propertyName: string | Symbol) {
    console.log("property decorator");
    console.log(target, propertyName);
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product {
    @Log
    title: string;
    price: number;

    constructor(t: string, p: number) {
       this.title = t;
       this.price = p;
    }
    @Log2
    getPriceWithTax(tax: number) {
       return this.price * (1 + tax);
    }
}