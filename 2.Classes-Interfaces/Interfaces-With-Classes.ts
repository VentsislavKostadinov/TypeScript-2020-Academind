interface Greetable {
    name?: string;

    greet(phrase: string): void;
}

class Person2 implements Greetable {
    name?: string;

    constructor(n?: string) {

        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        } else {
            console.log("Hi!")
        }
    }
}

let user: Person2;
user = {
    name: "Venk",
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}
user.greet("Hello CLass and Interface");