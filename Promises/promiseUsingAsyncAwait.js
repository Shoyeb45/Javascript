// Promise:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
            let flag = true; // change the value to false

            if (flag) {
                console.log("");
                resolve({name: "Shoyeb", rollno: 69});
            } else {
                reject("Connection failed");
            }
        }, 
        2000
    )
});

// Now let's handle promise using async and await. `async` keyword is used in function. We also need to use await along with async when recieving from promise
// async functions are alway wrapped in try-catch block

async function promiseHandling() {
    try {
        const res = await promise;
        console.log(res);
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
    }
}

promiseHandling();