const User = {
    _email: "k@gmail.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const p = Object.create(User)
console.log(p.email)