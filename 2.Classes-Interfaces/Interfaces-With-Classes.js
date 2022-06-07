class Person2 {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user;
user = {
    name: "Venk",
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user.greet("Hello CLass and Interface");
