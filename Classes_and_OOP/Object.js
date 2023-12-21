function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));        // 25
console.log(multiplyBy5.power);     // 2
console.log(multiplyBy5.prototype); // {}
//  A function in JS is both, a function and an object.

// "this" is used to set the current context. 
function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++;       // this.score (to know about the context)
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)      // will generate an error, as new object is not created     // error -> cannot read properties of undefined

chai.printMe()      // it will print the score, as a new object is created
tea.printMe()       // score will not be printed, as no new object is created

/* NOTES
    ## Prototypes in JS: 
    Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.
    
    const myObject = {
        city: "Madrid",
        greet() {
            console.log(`Greetings from ${this.city}`);
        },
    };
    myObject.greet(); // Greetings from Madrid
*** This is an object with one data property, city, and one method, greet(). If you type the object's name followed by a period into the console, like myObject., then the console will pop up a list of all the properties available to this object. You'll see that as well as city and greet, there are lots of other properties!


*/



/* NOTES: HITESH CHAUDHARY:

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/