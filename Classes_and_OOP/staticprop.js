class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const Sam = new User("Sam")
// console.log(Sam.createId()) 

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const box = new Teacher("Box", "box@gmail.com")
box.logMe()