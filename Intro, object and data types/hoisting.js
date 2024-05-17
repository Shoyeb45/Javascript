console.log("Variable before defining: ", result);

// Calling fucntion before declaring
let result = add(12, 42);
console.log("Variable after defining: ",result)
function add(a, b) {
    return a+b;
}