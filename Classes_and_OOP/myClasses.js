// // ES6

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const alpha = new User("alpha", "alpha@gmail.com", "123")
console.log(alpha.encryptPassword())
console.log(alpha.changeUsername())


// //  IF WE DON'T HAVE CLASS, 
// // Creating function User with parameters as username, emai, and password:
// function User(username, email, password){
//     this.username = username
//         this.email = email
//         this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const beta = new User("Beta", "beta@gmail.com", "beta123")
// console.log(beta.encryptPassword())
// console.log(beta.changeUsername())