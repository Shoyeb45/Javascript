function isPrime(a){
let count = 0;
if(a==1)
return 0;
else{
    for(let i = 0; i<=a ; i++){
        if(a % i == 0)
        count++;
    }

    if(count == 2)
    return 1;
    else
    return 0;
}
}

let number = [13, 15, 17, 2, 3]

let primeNumber = number.filter( (val) => {
       return isPrime(val) == 1;
});

for(val of primeNumber){
    console.log(val);
}