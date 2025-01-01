const score = 200;
console.log(score); // 200

const bal = new Number(312);
console.log(bal);  // [Number: 312]

const x = new Number(Math.PI);
console.log(x);   // Toooooooooooo many decimal places
console.log(x.toFixed(3)); // upto 3 decimal places

let h = 134.342
let val = h.toPrecision(2);
console.log(val);
console.log(typeof(val));


const num = 10000000;
console.log(num.toLocaleString("en-US"));
console.log(num.toLocaleString("en-IN"));


 