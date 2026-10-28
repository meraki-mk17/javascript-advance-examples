async function getData(){
    const url = "https://jsonplaceholder.typicode.com/users";
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP status error ${response.status}`)
        }
        const data = await response.json();
        const list = data.find(users => users.id < 6);
        console.log(list.name)
        console.log(list.email)
        console.log(list.company)
    }catch(error){
        console.log("Error catched",error)
    }
}
getData()