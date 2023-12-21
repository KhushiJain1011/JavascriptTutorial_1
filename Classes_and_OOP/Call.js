function SetUserName(username){
    // complex DB Calls:
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    // SetUserName(username)       // this method will not be executed when called in this manner
    // SetUserName.call(username)   // this will not store the data, 
    // this used for reference in setusername function will be deleted after the code execution. So we can provide this in the function call.
    SetUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "Chai@example.com", "123")
console.log(chai)