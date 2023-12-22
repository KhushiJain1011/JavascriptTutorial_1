class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}extraChar`
    }
    set password(value){
        this._password = value      // here the original password is stored in the DB, and when we use toUpperCase in get, it will be converted at the time of return
        // this._password = value.toUpperCase()     // using toUpperCase() here, we will store the password in uppercase in the DB.

    }
}

const obj = new User("obj@gmail.com", "abcd")
console.log(obj.password)
console.log(obj.email)
