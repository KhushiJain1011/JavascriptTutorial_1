const user = {
    username: "Khushi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        console.log(`Usename: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;     // if we don't write return, then also it will be correct
}

const userOne = new User("Khushi", 15, true)
const userTwo = new User("Kinjal", 13, false)
console.log(userTwo)
console.log(userOne)
