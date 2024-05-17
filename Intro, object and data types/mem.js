let a = Number.MAX_VALUE
console.log(a + 2);

function f(x) {
    return x**2;
}

function facto(x) {
    if (x === 1 || x === 0) {
        return 1;
    }

    return x * facto(x - 1);
}

h = 12
let c = f(Number(h));
console.log(c);
let g = facto(12);
console.log(g)