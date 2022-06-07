var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
//@Logger("Login person")
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Max";
        console.log("create an object");
    }
    return Person;
}());
/* Property Decorators  */
console.log('--- Property Decorators ---');
function Log(target, propertyName) {
    console.log("property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this.price = p;
    }
    Product.prototype.getPriceWithTax = function (tax) {
        return this.price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title");
    __decorate([
        Log2
    ], Product.prototype, "getPriceWithTax");
    return Product;
}());
