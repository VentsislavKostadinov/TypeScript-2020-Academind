const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
function testAdd(n1, n2) {
    return n1 + n2;
}
const number1 = 50;
const number2 = 10;
const result = testAdd(number1, number2);
console.log("result ", result);
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["USER"] = 6] = "USER";
})(Role || (Role = {}));
let person;
person = {
    name: "Venk",
    age: 32,
    role: Role.ADMIN
};
let unionDemo;
let leftOrRight;
function typeAliasTest(age1, age2) {
    let result;
    if (typeof age1 === "number" && typeof age2 === "number") {
        result = age1 + age2;
    }
    else {
        result = age1.toString() + age2.toString();
    }
    return result;
}
const u1 = { name: 'Max', age: 30 };
let u2 = { name: 'Max' };
u2 = 'Michael';
function testVoidFunction(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
printResult(testVoidFunction(5, 5));
// function as Type
let combineValues;
combineValues = testVoidFunction;
// unknown type
let userInput;
userInput = 5;
userInput = "Max";
// spread operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
// clone object with spread operator
const personSpread = {
    name: 'max',
    age: 30
};
const copiedPerson = Object.assign({}, personSpread);
// rest operator
const addRest = (...args) => {
    return args;
};
console.log(addRest(1, 2, 3, 4, 5, 6));
