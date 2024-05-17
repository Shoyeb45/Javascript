// Arrow function but not actual function

const print = function() {
    console.log("This function behaves like arrow function\n");
}

print();

// Actual arrow function
const new_print = () => {
    console.log(`This is an actual function`);
    return;
}

// sum of two variable
const sum = (a, b) => {
    return a+b;
}



