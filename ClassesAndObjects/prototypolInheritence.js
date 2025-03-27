const parent = {
    greet: function() {
        console.log("Hello");
    }
};

const child = Object.create(parent); // It creates the child of parent object

child.chilGreet = () => {
    console.log("Child greet");
}

child.greet(); // It will call greet() of parent
console.log(child);
