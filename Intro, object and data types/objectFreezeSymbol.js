let user = {
    name: "Shoyeb",
    email: "shoyeb@gmail.com",
    'phone number': 912357156 
};

console.log(user);
console.log(typeof user);

// how we can define symbol as an object key
const sym = Symbol("hii");

user[sym] = "symbol"; // key will be symbol
user.sym = "af";      // key will be not symbol

console.log(user);

user.fun = function() {
    return "hii";
};  // defined function 

console.log(
    user.fun
);
console.log(
    user.fun()
);


Object.freeze(user);
// Now after that we can't modify our object
