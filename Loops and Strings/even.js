let gameNum = 34;
console.log("The programm will stop when you guess the correct number.");
let n ;

do{
    n = prompt("Guess the correct number.");
}while( gameNum != n);

console.log("You entered the correct number.", n);