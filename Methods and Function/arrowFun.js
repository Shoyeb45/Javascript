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


const user = {
    name: "Shoyeb",
    email: "shoyeb@gmail.com",
    welcomeMsg: function() {
        console.log(`${this.name}, welcome to website`);
        console.log(this);
        
    }
};

user.welcomeMsg();
user.name = "Durgesh";
user.welcomeMsg();

console.log(this);   // Node environment: current context is empty in node environment. But in window the current context is the object with browser functionality

function someFun() {
    let username = "shoyeb45";
    console.log(this);
    console.log(this.username); // No variable named `username` in the context
}

// Execute function
someFun();


// Arrow function:
const f = () => {
    let name = "navneet";
    console.log(this);  // nothing
};

f();