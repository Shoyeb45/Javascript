//finding factorial of given number
console.log("Factorial Program");
let facto = 1
if(n == 0 || n == 1){
    console.log("Factorial of ",n,"is ", facto);
}
let i = 1;
while(i<=n){
    facto *= i;
    i++;
}
console.log("Factorial of",n,"is", facto);