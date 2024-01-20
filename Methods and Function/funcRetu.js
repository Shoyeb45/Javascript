function square(a){
    let b = a*a;
    return b;
    //here the code will not going to execute
}

function square1(a){
    a = 8;
    let b = a*a;
    return b;
    //here the code will not going to execute
}

let sq = square(6*2);
console.log(sq)

//scope of variable

let sq1 = square1(32) //first 32 is passed but it is overwritten by 8 in local scope of function
console.log(sq1)
