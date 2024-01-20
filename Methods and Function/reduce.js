let array = [12, 15, 20, 45, -9]

//finding average of all the elements
let i = 1;
const sum = array.reduce((prev, curr) => {
    return (prev+curr) ; 
});

//same way we can multiply all the elements

const mult = array.reduce((prev, curr) => {
    return prev*curr; 
})

console.log("Addition",sum)
console.log("Multiplication:",mult)

//code for largest number in array using reduce

let largest = array.reduce((prev, curr) => {
    return prev > curr ? prev : curr ;
})

console.log("Largest number in array:", largest)