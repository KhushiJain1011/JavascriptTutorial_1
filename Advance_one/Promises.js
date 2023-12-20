
// 1. Creating a promise: 
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task:
    // DB Calls, cryptography, network call
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 1000);
} )
promiseOne.then(function(){
    console.log("Promise consumed")
})

// 2. creating promise without storing it in another variable
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved")
})

// 3. creating promise and passing data 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "John", email:"john@example.com", })
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})

// 4. 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Khushi", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is either resolved or rejected"))


// 5:
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch (error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E: ", error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))