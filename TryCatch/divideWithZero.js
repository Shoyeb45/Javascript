function divide(a, b) {
    if (b == 0) {
        throw new Error("Can't divide a number by zero");
    }
    return a / b;
}

try {
    const res = divide(12, 0);
    console.log(`12 / 12341412 = ${res}`);
} catch (error) {
    console.log(error.message);
}