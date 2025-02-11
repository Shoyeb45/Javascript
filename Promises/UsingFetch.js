url = "https://jsonplaceholder.typicode.com/todos/2"

const fetchReponse = fetch(url)

fetchReponse
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })