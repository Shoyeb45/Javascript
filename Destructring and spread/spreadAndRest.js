// 

let arr = [1, 4, 2, 42 ,4, 23, 2, 2, 23, 4, 32];

let [num1, num2, ...remaininig] = arr;  // num1 will store 1, num2 will store 3 and remaining will store the remaining elements of arr
// console.log(num1, num2, ...remaininig);
console.log(...arr);  

function tp(...args) {
    console.log(...args);
}

tp(1, 3,3 , 3, 3,3, 3, 'e', 'Shoyeb');

// by default arguments will be present in function
function f() {
    console.log(arguments);
}

f(1,2,2,3,3)