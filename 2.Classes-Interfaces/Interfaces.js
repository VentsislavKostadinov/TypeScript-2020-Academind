let user1;
user1 = {
    name: "max",
    age: 32,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there I am Venk!');
