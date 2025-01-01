// Singleton object
let user = new Object();

user.name = "shoyeb";
user.email = "shoyeb@gmail.com";

console.log(user);

let detail = {
    state: "Gujarat",
    district: "Kutch",
    city: "Bhuj",
    mobileNumber: "9327156940"
};

console.log(detail);


// let's combine both of them

// wrong syntax
// let fullDetail = { user, detail };
// console.log(fullDetail);

// 1. using spread operator
let fullDetail = { ...user, ...detail };
console.log(fullDetail);

// 2. assign
// fullDetail = Object.assign(user, detail); // all values are going in `user`
// console.log(fullDetail);
// console.log(user);
fullDetail = Object.assign({}, user, detail); // all values are going in `user`
console.log(fullDetail);
console.log(user); // now user is not modified
