// Ex-1
const promiseOne = new Promise( (resolve, reject) => {
        setTimeout(() => {
                console.log("Async Task-1 completed.. - Wait time: 1sec");
                resolve();
            },
            1000
        );
    }
);

promiseOne
    .then(() => {
            console.log("Promise-One consumed\n");
        }
    )
    .catch((error) => {
        console.log("Some error\n",error);   
    }
);


// Another syntax for same kind of execution, ex-2
new Promise( (resolve, reject) => {
    setTimeout(() => {
            console.log("Async task-2 completed... - Wait time: 2sec");
            resolve()
        }, 
        2000
    );
})
    .then((data) => {
            console.log(data);
           console.log("Promise-Two consumed\n");  
        }
    )
    .catch((error) => {
        console.log("Some error\n",error);   
    }
);


// Ex-3
const promiseThree = new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log("Async task-2 completed, sending data... - Wait time: 3sec");
                // Sending data throught resolve
                resolve({
                    name: "Shoyeb",
                    rollNo: 69
                });
            }, 
            1500 * 2
        );
    }
);

// `then` always receive some data
promiseThree
    .then((user) => {
        console.log(user, "\n");
    }
);


// Ex-4 
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
            console.log("Async Task-4, wait time : 4sec");
            
            let flag = true;
            if (!flag) {
                resolve({
                    username: "Shoyeb45",
                    password: "pata-nahi"
                });
            } else {
                // To send errors
                reject("Error: flag is true, so can't resovle the promise now\n");
            }
        },
        4000 // 4 second
    );
});

promiseFour
    .then((data) => {
        console.log("Async task-4 completed\n");
        }
    )
    .catch((error) => {
        console.log("Some error occured while handling promise\n" + error);
    }
);



// Ex-5
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
            console.log("Async Task-5 - wait time : 5sec");
            let x = 20; 
            resolve(x);
        }, 
        5000
    );
});

// Then chaining, if we return something from `then` call back function then it will be recieved by subsequent `then`
promiseFive
    // First then, it will recieve the data whatever resolve has send
    .then((x) => {
            console.log("Value of first then " + x);
            
            x *= 2; // double it and give it to next then
            return x;
        }
    )
    // It will receive the data from it's precedent then
    .then((x) => {
            console.log("Value of second then " + x + "\n");
            x *= 2; // double it and give it to next then
            return x
        }
    )
    // And we can continue this chaining
    .catch((err) => {
        console.log("Some error\n" + err);
    }
);


// Ex-6
const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task-6, wait time : 6 sec");
        resolve("Something...");
    }, 6000);
});

// Use of finally : it is used to show that the promise has completed, either `then` or `catch`
promiseSix
    .then((data) => {
        console.log(data);
        console.log("Async task-6 completed");
        
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally part : The Fifth-promise is either resolved or rejected\n");      
    }
);

