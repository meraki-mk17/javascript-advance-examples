// //1.
async function getData(){
    const url = "https://jsonplaceholder.typicode.com/users";
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP status error ${response.status}`)
        }
        const data = await response.json();
        const list = data.filter(users => users.id < 6);

        list.forEach(users =>{
            console.log(users.name)
            console.log(users.email)
            console.log(users.company)
        })
        
    }catch(error){
        console.log("Error catched",error)
    }
}
getData()

// //2.
// async function doSomethingRisky() {
//   try {
//     // 1. Put your risky code here (fetch, JSON parsing, etc.)
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
//     if (!response.ok) {
//       throw new Error(`Something went wrong with the server! ${response.status}`);
//     }
    
//     const data = await response.json();
//     console.log("Success:", data.age);

//   } catch (error) {
//     // 2. If ANYTHING inside 'try' fails, code jumps straight here!
//     console.log("Caught an error:", error);
    
//   } finally {
//     // 3. (Optional) This block runs ALWAYS, whether it succeeded or failed
//     console.log("Operation complete.");
//   }
// }

// doSomethingRisky();


// //3.
// const myPromise = new Promise((resolve,reject)=>{
//     let a = 10;
//     let b = 20;

//     if(b === 0){
//         reject("Cannot divide by zero!");
//     }else{
//         resolve(a/b);
//     }
// });
// myPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     })


// //4.
// const myPromise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("Data loaded!");
//     },2000);
// });

// myPromise
//     .then(result => {
//     console.log(result)
// })
//     .catch(error => {
//         console.log(error)
//     });


// // 5.
// Promise.resolve(5)
//     .then(num => {
//         return num*2
//     })
//     .then(num => {
//         return num + 10
//     })
//     .then(result => {
//         console.log(result);
//     }); 

// Promise.resolve("failed")
//     .then(result => console.log(result))
//     .catch(reject => console.log(reject))
//     .finally(() => console.log("Finished"));


// //6.
// const myPromise = new Promise((resolve,reject) => {
//     resolve("Hello JavaScript!");
//     reject("Something went wrong!")
// }); 
// myPromise
//     .then(result => {
//     console.log(result);
//     })
//     .catch(reject => {
//         console.log(reject);
//     })


// //7.
// const addTwoPromises = async function(promise1, promise2) {
//     return (await promise1) / (await promise2)
// };

// addTwoPromises(2,2)
//     .then(result => console.log(result));


// //8.
// function redLight(){
//     return new Promise((resolve)=>{
//         console.log("Red");
//         setTimeout(()=>{
//             resolve();
//         },3000);
//     });
// }

// function yellowLight(){
//     return new Promise((resolve)=>{
//         console.log("Yellow");
//         setTimeout(()=>{
//             resolve();
//         },1000);
//     });
// }

// function greenLight(){
//     return new Promise((resolve)=>{
//         console.log("Green");
//         setTimeout(()=>{
//             resolve();
//         });
//     });
// }

// async function trafficLights(){
//     await redLight();
//     await yellowLight();
//     await greenLight();

//     await redLight();
// }

// trafficLights();


// //9.
// function divide(a,b){
//     return new Promise((resolve,reject)=>{
//         if(b!=0){
//             resolve(a/b)
//         }else{
//            reject("Cannot divide by Zero")
//         }
//     })
// }
// divide(10,0)
//   .then(resolve => {
//     console.log(resolve)
//     })
//   .catch(reject => console.log(reject))

// //10.
// function squareRoot(num){
//     return new Promise((resolve,reject)=>{
//         if(num < 0){
//             reject("Square root of a negative number is not possible")
//         }else{
//             resolve(Math.sqrt(num))
//         }
//     })
// }
// squareRoot(25)
//     .then(resolve => console.log(resolve))
//     .catch(reject => console.log(reject))



// //11.
// function login(username,password){
//     return new Promise((resolve,reject)=>{
//         if(username ==="Admin" && password ==="12345"){
//             resolve("Login Successful")
//         }else{
//             reject("Invalid Username or Password")
//         }
//     });
// }

// login("Admin","12345")
//    .then(resolve => console.log(resolve))
//    .catch(reject => console.log(reject));


// //12.
// function createPassword(){
//     return function (password){
//         const hasLength = password.length > 8;
//         const  hasUpperCase = /[A-Z]/.test(password);
//         const hasNumber = /[0-9]/.test(password);

//         if(!hasLength || !hasUpperCase || !hasNumber){
//             throw new Error("Invalid Password")
//         }
//         return "Valid Password"
//     }
// }
// const validPassword = createPassword();
// try{
//     console.log(validPassword("Hellowhois12"));
//     console.log(validPassword("hello"))
// }catch(error){
//     console.log(error.message)
// }


// //13.
// function withdraw(amount){
//     const balance = 5000;
//     return new Promise((resolve,reject)=>{
//         if(amount > balance){
//             reject("Insufficient Balance")
//         }else if(amount <=0 ){
//             reject("Invalid Withdrawal amount")
//         }else{
//             const remainingBalance = balance - amount;
//             resolve(`Withdrawal Successful, Remaining Balance ${remainingBalance}`)
//         }
//     })
// }
// withdraw(6000)
//    .then(resolve => console.log(resolve))
//    .catch(reject => console.log(reject))


// //14.


















