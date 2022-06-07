var el1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date()
};
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default: "No such an animal!";
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
