// here we have understand new key word properly and in the second phase we have understand prototype.

function multiplyBy5 (num){
    return num*5
}

multiplyBy5.power = 2

// console.log(multiplyBy5(2))
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username , score){
    this.username = username;
    this.score = score;
}

createUser.prototype.incrementUser = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`the score is ${this.score}`)
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

// console.log(chai)
// chai.printMe()
// tea.printMe()

// chai.incrementUser()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// #################################################################################################################

// purely based on prototype to understand prototype

let myName = "hitesh"
console.log(myName.length)


let myName2 = "hitesh     " /** this is the same code above but here we have added some extra spaces after the name which results in 11 as length but we want the result to be print as 6 only avoiding the unneccesay spaces . for that we will create a function. */
console.log(myName2.length)
// there is a property called trim(.trim().length) by using which we can eleminate the unneccesary spaces . but we will not use that but with the help of prototype we will create a function

// we will create a property with the help of which we will use the same functionality of the trim. by the name of .trueLength


let myName3 = "hitesh"
console.log(myName3.trueLength) /** this the property which we are going to use and create the trim feature */

// before that lets start with an array to understand better 

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: ()=>{
        console.log(`spidy power is ${this.spiderman}`);
    }
}

// lets create our own property or method : lets say .luit()
// so to inject this special method , the question where do we put it so that we access it from everywhere. yes we are going to put this in the object , as we know from the hitesh sir diagram everything is under object only , whether be it array , function or string etc.
// heroPower.luit() this is how it is going to look

// functions which are by default available are called the factory function .

Object.prototype.luit = ()=>{ /** as we can see we haved Object to inject the prototype in the object. */
    console.log("Luit is present in all objects")
}

// as we know everything goes through object only so lets check . above we have already declared an array and according to the theory even array also goes through an object . so let us check the method whhich we have injected in the object can be accesed by an object or not.

myHeros.luit()
// and we can see the newly created method can be accessed by the array also 
// what we have done here is that we have accessed the top level hirarcy i.e Object and inject our own method , after which it can be accessed by everyone . 

// #######################################################################################################

// now lets test if we give the power or inject the method to the lower hirarcy that is the array , can it be accessed by everone . SO LETS CHECK

Array.prototype.luit2 = ()=>{
    console.log("now the power or method is only injected in array")
}


// so myHeros is an array it should have the access to the method but heroPower is a object so theoritically it should not have the access of the newly created method that is luit2() 

myHeros.luit()
myHeros.luit2()
// heroPower.luit2() /** theoritically this is an object so it is not suppose to access the method injected in array . so we are expecting an error */

// and we can see we have recieved the error because .luit2() is not accessed by an object . if we comment heroPower.luit2() then our code will run perfectly.

// #################################################################################################################

// inheritance
// here we will learn about the old style of prototype to interconnect two different obejct

const teacher = {
    makeVideo: true,

}

const teachingSupport = {
    isAvailable: true
}

const technicalSupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__ : teachingSupport
}

console.log(technicalSupport.isAvailable) /** as we can see with the help of proto we can access the property of teachingSupport as well .  */

// this is only inheritance with the help of which we can access other objects
// but __proto__ has become old way of writing the code . we won't find it now 

// MODERN SYNTAX ##################################################

Object.setPrototypeOf(teachingSupport, teacher) /** in the () we have mention that teachingSupport ap access kar lo teacher ki sari property */

console.log(teachingSupport.makeVideo) /** as we can see using the modern sytax we have accessed all the properties of teacher */

// ######################################################################################################################

// lets complete our task which we have left in the above section. creating a .trueLength method . 

let myNamexx = "hitesh     "

// here we have directly selected the string and inject the method. 
String.prototype.trueLength = ()=>{
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`the true lenth is: ${this.length}`)
}
myNamexx.trueLength()