let arr = [1, 3, 4];

// We want new array with arr after one or two elements
// Hard coding
let newArr = [5, 6, arr[0], arr[1], arr[2]];
console.log("New array: ", newArr);

// Using spread operator
let newArr2 = [5, 6, ...arr];
console.log("Array after spread operator: ", newArr2);
