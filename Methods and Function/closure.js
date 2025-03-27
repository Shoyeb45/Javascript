// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         console.log(count);
//     }
// }

// const counter = outer();

// counter();
// counter();
// counter();
// counter();

// Secret code generation

let maxAttempts = 5;

function createSecretCode(msg) {
    let count = 0;
    return () => {
        count++;
        if (count > maxAttempts) {
            console.log("Access denied too many request");
        }
        else {
            console.log(`Your secret code is ${msg} - Attempt-#${count}`);
        }
    };
}

const d = createSecretCode("XYZ");
d();
d();
d();
d();
d();
d();