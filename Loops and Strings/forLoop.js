//calculate sum of first n natural number

let n = prompt("Enter number:");
let sum=0;
for(let i=1; i<=n ; i++){
    console.log(i);
    sum += i;
}

console.log("Sum is:",sum);