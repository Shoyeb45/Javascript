class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    toString() {
        return `${this.real} + i ${this.imaginary}`;
    }
}

const quadraticEqSolve = (a, b, c) => { 
    let x1, x2;
    let D = b * b - 4 * a * c;
    if(D >= 0) {
        x1 = (-b + Math.sqrt(D))/(2 * a);
        x2 = (-b - Math.sqrt(D))/(2 * a);
    } else {
        x1 = new Complex(-b/2 * a, Math.sqrt(-D)/2*a);
        x2 = new Complex(-b/2 * a, -Math.sqrt(-D)/2*a);  
    }
    return [x1, x2];
}

let a = -9, b = 6, c = 1;
let sol = quadraticEqSolve(a, b, c);
console.table({ a: a, b: b, c : c});
console.log(`${sol[0]} \n${sol[1]}`);

console.log(`Sum of roots: ${sol[0] * sol[1]}`);
