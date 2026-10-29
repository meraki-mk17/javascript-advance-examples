// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => {
//         const listOfUsers = users.filter(person => person.id<=5);
//         for(let user of listOfUsers){
//             console.log("Name: ",user.name);
//             console.log("Email: ",user.email);
//             console.log("Company Details: ",user.company);
//         }
//     })
//     .catch(error => {
//         console.log("Error: ", error);
//     });

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=> response.json())
//     .then(users=> {
//         const website = users.map(site=>site.website);
//         console.log(website);
//     })
//     .catch(error => {
//         console.log("Error: ",error);
//     })


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.json())
//     .then(users => {
//         for(let user of users){
//             if(user.username==="Samantha"){
//                 console.log(user.address.city)
//             }
//         }
//     })
//     .catch(error => {
//         console.log("Error: ",error);
//     })



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.json())
//     .then(user=>{
//         const suites = user.filter(unit=>unit.address.suite.startsWith("Suite 8"));
//         console.log(suites);
//     })
//     .catch(error => {
//         console.log("Error: ",error);
//     })


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users =>{
//             const citys = users.filter(user => user.address.city.length>8)
//             console.log(citys)
//     })
//     .catch(error => {
//         console.log("Error: ",error);
//     })

// Promise.resolve(10)
//   .then(n => n * 2)
//   .then(n => console.log(n));


// async function getData(){
//     const url = "https://jsonplaceholder.typicode.com/users";
//     try{
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error(`HTTP status error ${response.ok}`)
//         }
//         const data = await response.json();
//         const person = data.find(users => users.id === 1);
//         console.log(person.name);


//     }catch(error){
//         console.log("Error catched",error);
//     }

// }
// getData();

// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// const users = await res.json();

// // Keep only users whose ID is greater than 5
// const filteredUsers = users.filter(user => user.id > 5);
// console.log("Filtered count:", filteredUsers.length);






































































































