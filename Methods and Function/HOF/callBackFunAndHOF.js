// const Square = (n) => {
//     return n ** 2;
// }

// function cube(Square, n) {         // ThiS is HOF function and square is callback function
//     return Square(n) * n;
// }

// console.log(cube(3));

function greet() {
    console.log("Hello!!");
}

// setInterval(greet, 1000)  // HOF Function and greet is callback function

// setInterval(() => {
//     console.log("Hii , How are u?");
// }, 1000);

setTimeout(() => {
    console.log("Hii , How are u?");
}, 5000);
// Callback hell