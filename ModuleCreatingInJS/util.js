export const add = (a, b) => {
    if (!a) {
        throw new Error("a is undefined");
    }

    if (!b) {
        throw new Error("b is undefined");
    }

    return a + b;
}

const subtract = (a, b) => {
    if (!a) {
        throw new Error("a is undefined");
    }

    if (!b) {
        throw new Error("b is undefined");
    }

    return a - b;
}

export default subtract;
