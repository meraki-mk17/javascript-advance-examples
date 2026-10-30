// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => {
//         for(let user of users){
//             console.log(user.name);
//             console.log(user.email);
//         }
//     })
//     .catch(error => {
//         console.log("Error: ", error);
//     })


    async function b(){
    const resp=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await resp.json();
    const reslt=data.filter(user=> user.address.city === "Gwenborough");
    console.log(reslt);
}
b()