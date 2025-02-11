url = "https://jsonplaceholder.typicode.com/todos"

const fetchReponse = fetch(url)

fetchReponse
    .then((data) => {
        return data.json();
    })
    .then((data) => {   
        for (const ele of data) {
            console.log(`Id of the task : ${ele.id}`);
            console.log(`Title of the task : ${ele.title}`);
            console.log(`Status of task : ${ele.task? "Completed" : "Not-completed"}`);    
            console.log();
        }
    })
    .catch((error) => {
        console.log(error);
    })

