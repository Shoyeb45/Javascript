url = "https://jsonplaceholder.typicode.com/users"

// async function getUserData(ApiEndpoint) {
//     const response = await fetch(ApiEndpoint);
//     const res = await response.json();
    
//     res.forEach(user => {
//         console.log(`Name : \t\t${user.name}`);
//         console.log(`Username : \t${user.username}`);
//         console.log(`Email : \t${user.email}`);
//         console.log(`Address : \t${user.address.street}, ${user.address.suite}, ${user.address.city}-${user.address.zipcode}`);
//         console.log();
//     });
// }

fetch(url)
    .then((data) => data.json())
    .then((data) => {
        data.forEach(user => {
            console.log(`Name : \t\t${user.name}`);
            console.log(`Username : \t${user.username}`);
            console.log(`Email : \t${user.email}`);
            console.log(`Address : \t${user.address.street}, ${user.address.suite}, ${user.address.city}-${user.address.zipcode}`);
            console.log();
        });
    })
// getUserData(url);


