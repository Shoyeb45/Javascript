console.log("\t\t***Sum of number from 1 to n in array using reduce***")

let n = prompt("Enter number")
let number = [];

for(let i = 1; i<=n ; i++){
    number[i-1] = i;
}

let i = 1;
const sum = number.reduce((prev, curr) => {
    return (prev+curr) ; 
});

//same way we can multiply all the elements

const mult = number.reduce((prev, curr) => {
    return prev*curr; 
})

console.log("Addition",sum)
console.log("Multiplication:",mult)

