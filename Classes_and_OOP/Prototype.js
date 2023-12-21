// let myName = "khushi   "

// console.log(myName.length)      // 6+3 (6 letters + 3 spaces)       // but it is not the true length
// console.log(myName.truelength)      // undefined


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer", 
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// heroPower.xyz()      // undefined

Object.prototype.xyz = function(){
    console.log(`XYZ is present in all objects`)
}
// heroPower.xyz()
// myHeros.xyz()
// // both these statements will be executed, prototype is given to object and so it will be applicatble for array, function, string...

// now prototype (so, power is with array only) is given to array only: 
Array.prototype.newFun = function(){
    console.log(`Hey all`)
}
// myHeros.newFun()
// heroPower.newFun()       // it won't work


let username = " Abczyx   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`)
}

username.trueLength()
"qwerty".trueLength()