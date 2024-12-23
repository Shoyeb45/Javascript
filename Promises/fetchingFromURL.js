// We'll receive some data from URL : https://jsonplaceholder.typicode.com/users

const url = "https://jsonplaceholder.typicode.com/users";

// we'll use fetch() , which returns Promise.

// Using `async` and `await`.

async function getData() {
    try {
        const response = await fetch(url);
        // console.log(response); // this data is in raw format
        const data = await response.json(); // convert it into json : it's also time taking process, so wait till it's completed else the program will terminate

        console.log(data);
    } catch (error) {
        console.log("Some error has occured");
        console.log(error);
    }
}
// getData();

// Using then and catch

fetch(url)
    .then((respose) => {
        console.log("inside first then");
        return respose.json();
    })
    .then((data) => {
        console.log("inside second then");
        console.log(data);
    })
    .catch((err) => {
        console.log("inside catch block");
        console.log(err);
    }
);
    