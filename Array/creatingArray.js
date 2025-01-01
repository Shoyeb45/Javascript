// Flattening the array
const arr = [1, 2, 3, [-1, 23, 32, [5, 6, 7, [10, 11, [10, 15]]]], [11, 9, 8, [-12, 12,[12, [13, 123], [12, 123]]]]]

console.log(arr);

console.log(arr.flat(Infinity)); // convert it into 1-d



// check if the variable is an array
let val = "Shoyeb";
console.log(Array.isArray(val));

// Convert
console.log(Array.from(val));

// object case
console.log(Array.from({name: "Shoyeb"})); // empty

let val1 = 10, val2 = 20, val3 = 30;
console.log(Array.of(val1, val2, val3));

