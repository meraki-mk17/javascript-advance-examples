fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        for(let user of users){
            console.log(user.name);
            console.log(user.email);
        }
    })
    .catch(error => {
        console.log("Error: ", error);
    })