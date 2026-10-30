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


// fetch("https://jsonplaceholder.typicode.com/users/1")
//    .then(response =>{
      
//     if(!response.ok){
//         throw new Error("Failed to fetch user error")
//     }
//     const data = response.json()
//    })
//    .then(users =>{
//      console.log(users.name);
//      console.log(users.email);
//      console.log(users.company.name);
//      return users
//    })

// async function getInfo(){
//     try{
//         const response = await fetch ("https://jsonplaceholder.typicode.com/users/1");

//         if(!response.ok){
//             throw new Error("Failed to fetch users error ")
//         }

//         const data = await response.json();
//         console.log("Name:", data.name);
//         console.log("Email:", data.email);
//         console.log("Company Name:", data.company.name);
//     }catch(error){
//         console.log("Error: ",error)
//     }
// }
// getInfo()


// function getUser(){
//     return fetch("https://jsonplaceholder.typicode.com/users/1")
//             .then(response => {
//                 if(!response.ok){
//                     throw new Error("Failed to fetch user");
//                 }

//                 return response.json()
//             });
// }
// getUser()
//     .then(user =>{
//         console.log("Name:",user.name)
//     })
//     .catch(error => {
//         console.log("Error: ",error.message);
//     })


// async function getUser(){
//     try{
//         const response = await fetch( "https://jsonplaceholder.typicode.com/users");

//         if(!response.ok){
//             throw new Error(`HTTP error: ${response.status}`);
//         }

//         const users = await response.json();

//         const filteredUser = users.filter(user => user.website.endsWith("org"));
//         console.log(filteredUser);
//     }catch(error){
//         console.log("Error: ",error.message);
//     }
// }
// getUser();


// async function getProducts(){
//     try{
//         const response = await fetch( "https://fakestoreapi.com/products");

//         if(!response.ok){
//             throw new Error(`HTTP error: ${response.status}`);
//         }

//         const products = await response.json();

//         products.forEach(product => {
//             console.log("Title: ",product.title);
//             console.log("Price: ",product.price);
//             console.log("Category: ",product.category);
//         })
//     }catch(error){
//         console.log("Error: ", error)
//     }
// }
// getProducts();























































































