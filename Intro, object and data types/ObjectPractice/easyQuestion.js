dog = {};
console.log(dog);

dog["name"] = "Sadaharu";
dog["leg"] = 4;
dog["color"] = "white";

dog.bark = () => {
    return "Woof Woof";
}

console.log(`Name : ${dog.name}\nLeg : ${dog.leg}\nColor : ${dog.color}\n${dog.name} is hungry that's why he is doing ${dog.bark()}`);

dog.breed = "Unknown";
dog.getInfo = () => {
    return dog;
}

console.log(dog.getInfo());