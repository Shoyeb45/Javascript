// n number of argumnets

// Not a n number of arguments passed
function sum(num) {
    let sm = 0;
    for(i in num) {
        sm += num[i];
    }
    return sm;
}

let a = [1, 4 , 2, 1]
// for(i of a) {
//     console.log(i);
// }
// console.log(sum(a))

// Real arguments passed
// Using ...args

function mult() {
    let product = 1;
    for(x of arguments) {
        product *= x;
    }
    return product;
}

console.log(mult(10 , 13, 5, 9, 45, 4, 3, 5, 6));

function mx_of_element(...a) {
    let mx = Number.MIN_VALUE;
    for(x of a) {
        if(mx <= x) {
            mx = x;
        }
    }
    return mx;
}

console.log(mx_of_element(1, 2, 5, 6, 764, 1234));