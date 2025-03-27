let array = [12, 15, 20, 45, -9]

//finding average of all the elements
let i = 1;
const sum = array.reduce((prev, curr) => {
    return (prev+curr) ; 
});

//same way we can multiply all the elements

const mult = array.reduce((prev, curr) => {
    return prev*curr; 
}, 1)

console.log("Addition",sum)
console.log("Multiplication:",mult)

//code for largest number in array using reduce

let largest = array.reduce((prev, curr) => {
    return prev > curr ? prev : curr ;
})

console.log("Largest number in array:", largest)

const numb = [1, 2, 3, 4, 5];
let Sum = 0;
let resu = numb.reduce( (acc, curr) => acc + curr)
console.log(resu);
