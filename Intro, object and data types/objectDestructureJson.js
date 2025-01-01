const course = {
    name: "javascript",
    price: "999",
    courseInstructor: "Hitesh"
};

// object destructing 

const {price: pr, name, courseInstructor: instructor} = course;

// now no need to use . operator again n again
console.table({pr, name, instructor})



// for of api: json
// {
//     "name": "Shoyeb",
//     "coursername": "js in hind",
//     "price": "free"
// }

// Another form of api : in form of array
// [
//     {},
//     {},
//     {},
//     {}
// ]