class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const Sam = new Teacher("Sam", "sam@gmail.com", "zxcv")
Sam.addCourse()

// const John = new User("John")       // correct
// John.addCourse()        // can not be accessed by John
// John.logMe()        // correct
// Sam.logMe()         // correct

// console.log(Sam === John)       // false
// console.log(Sam instanceof Teacher)     // true
