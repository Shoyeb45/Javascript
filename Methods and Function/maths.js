// Maths function or methods
const pi = Math.PI
console.log(pi);

// round - nearest whole number
console.log(Math.round(pi));

// ceiling and flooring
let num = -3.423;
console.log(Math.ceil(num));
console.log(Math.floor(num));

// Random - generate 0 to 0.99999....
console.log(Math.random())
// generating number between 1 to 10
console.log(Math.floor(Math.random() * 11));

// Square root
console.log(Math.sqrt(81));

// Returning number between minimum and maximum bound

function rand(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min; 
    return num;
}

console.log(`Random numnber between 1 and 10 : ${rand(10, 14)}`);