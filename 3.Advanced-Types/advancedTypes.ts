// 1. Intersection types
type Admin = {
    name: string,
    privileges: string[]
};
type Employee = {
    name: string,
    startDate: Date;
}
// interface  ElevatedEmployee extends Employee, Admin {} // the same as type ElevatedEmployee = Admin & Employee;
type ElevatedEmployee = Admin & Employee;

const el1: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date()
}

// 2. Discriminated Unions
interface Horse {
    type: 'horse',
    runningSpeed: number
}
interface Bird {
    type: 'bird'
    flyingSpeed: number
}
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird': speed = animal.flyingSpeed; break;
        case 'horse': speed = animal.runningSpeed; break;
        default:  "No such an animal!"
    }
    console.log("Moving at speed: " + speed)
}
moveAnimal({type: 'bird', flyingSpeed: 10})


const userInput = '';
// if userInput is not null or undefined return userInput - otherwise return Default
const storedData = userInput ?? "Default";
console.log(storedData);