// async function getData(){
//     const url = "https://jsonplaceholder.typicode.com/users";
//     try{
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error(`HTTP status error ${response.status}`)
//         }
//         const data = await response.json();
//         const list = data.find(users => users.id < 6);
//         console.log(list.name)
//         console.log(list.email)
//         console.log(list.company)
//     }catch(error){
//         console.log("Error catched",error)
//     }
// }
// getData()

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


// const addTwoPromises = async function(promise1, promise2) {
//     return (await promise1) / (await promise2)
// };

// addTwoPromises(2,2)
//     .then(result => console.log(result));


function redLight(){
    return new Promise((resolve)=>{
        console.log("Red");
        setTimeout(()=>{
            resolve();
        },3000);
    });
}

function yellowLight(){
    return new Promise((resolve)=>{
        console.log("Yellow");
        setTimeout(()=>{
            resolve();
        },1000);
    });
}

function greenLight(){
    return new Promise((resolve)=>{
        console.log("Green");
        setTimeout(()=>{
            resolve();
        });
    });
}

async function trafficLights(){
    await redLight();
    await yellowLight();
    await greenLight();

    await redLight();
}

trafficLights();






























