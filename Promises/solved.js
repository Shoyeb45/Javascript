const PromiseEx = new Promise((resolve, reject) => {
    const isSuccess = false;

    if (isSuccess) {
        resolve("Your order will delivered")
    }
    else {
        reject("Delayed, Not Delivered")
    }

    console.log("Thanks for purchasing with us");
});


PromiseEx?.
    then((data) => console.log(data))
    .catch((err) => console.log(err));

function returnPromise(isSuccess) {
    return new Promise((res, rej) => {
        if (isSuccess) {
            res("Your order will delivered");
        }
        else {
            rej("Delayed, Not Delivered");
        }
    
        console.log("Thanks for purchasing with us");
    }); 
}


const execPromise = async (isSuccess) => {
    try {
        const some = await returnPromise(isSuccess);
        console.log(some);
        
    } catch (error) {
        console.log(error);
    }
};

execPromise(false);

