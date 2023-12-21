// console.log(Math.PI)
// Math.PI = 5         // this value can not be overridden
// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

const obj = {
    name: "Object Name",
    price: 250,
    isAvailable: true,
    orderFun: function(){
        console.log("Not completed")
    }
}
console.log(obj)
// console.log(Object.getOwnPropertyDescriptor(obj))       // undefined
console.log(Object.getOwnPropertyDescriptor(obj, "name"))       

Object.defineProperty(obj, 'name', {
    // writable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(obj, "name")) 

for(let [key, value] of Object.entries(obj)){
    if(typeof value != 'function'){
        console.log(`${key}: ${value}`)
    }
   
}