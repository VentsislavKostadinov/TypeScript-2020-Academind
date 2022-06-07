const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

function add(num1: number, num2: number) {

    return num1 + num2;
}

function testAdd( n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 50;
const number2 = 10;

const result = testAdd( number1, number2);
console.log("result ", result);

enum Role { ADMIN = "ADMIN", USER = 6}

let person: object;
 person = {
    name: "Venk",
    age: 32,
     role: Role.ADMIN
}
let unionDemo: string | number | boolean;

let leftOrRight: "left" | "right";

type Combinable = number | string;

function typeAliasTest(age1: Combinable, age2: Combinable) {
  let result;

  if(typeof age1 === "number" && typeof age2 === "number") {
      result = age1 + age2;
  } else {
      result = age1.toString() + age2.toString();
  }
  return result;
}
// custom type
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

// union type object or string
type User2 = { name: string } | string;
let u2: User2 = {name: 'Max'};
u2 = 'Michael';

function testVoidFunction(n1: number, n2: number) {
    return n1 + n2;
}
function printResult(num: number): void {
    console.log(num)
}
printResult(testVoidFunction(5, 5));

// function as Type
let combineValues: (a: number, b: number) => number;
combineValues = testVoidFunction;

// unknown type
let userInput: unknown;

userInput = 5;
userInput = "Max";

// spread operator
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

// clone object with spread operator
const personSpread = {
    name: 'max',
    age: 30
}

const copiedPerson = {...personSpread};

// rest operator

const addRest = (...args: number[]) => {
    return args;
}

console.log(addRest(1, 2, 3, 4, 5, 6));

