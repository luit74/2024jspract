// javascript and classes.
// js is basically a proto-type base language not object oriented 

// OBEJCTS 
// => collections of properties and methods
// => toLowerCase

// why use OOP:-

// parts of OOP:-

// => Objects literals -- {} 


// => constructor function
// => prototypes
// => classes
// => instances (new , this)


// 4 pillers of OOPS
// => Abstraction -- hide details eg fetch() {we donot know internally what it is doing}
// => Encapsulation -- wrap up the data , whatever we want to let you access u can access whatever we donot want you to access you cannot access
// => inheritance -- 
// => polymorphism -- poly means many , morphism means roop -- many roop , many faces .

// look in the notes section for better understanding


// #########################################################################################################################

// Object literals

const user = {
    username: "luit74",
    loginCount: 9,
    signedIn: true,
    getUserDetails: function(){ // if we use arrow function here it wont work.
        console.log("user details has been recieved from the data base.")
        console.log(`username ${this.username}`) /** this is the use of the this keyword. or the this method. */
    }
}

// if we have to build multiple user objects lets say 1000 username details etc , So it is not possible to hard type each and every objects . so for that instance constructor function

console.log(user.username)
console.log(user.getUserDetails())
console.log(this) /** as we can see it is an empty parenthesis in the global context */

// ################################################################################################################

// FOR EXAMPLE 
// 1. const promise = new Promise()
// 2. const date = new Date()

// the new used in the above sentence is called the constructor function .
// this  allow us from one object literal to create multiple instances
// this is used to create new executational context

// ################################################################################


// this is the constructor function
function User(username , loginCount , isLoggedIn){
    this.username = username; //this.username is the variable and the other username is the argument which we gonna provide as an input
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Luit74",12,true) //with the new keyword we can always create a new instance to stop overwriting
const userTwo = new User("Jimmy76",2,false)
// NOTE : whenever we create a new keyword an empty instance is used which allow us to create a new object with the help of the constructor.


console.log(userOne)
console.log(userOne.constructor) //Output is User function ,, constructor is nothing but a reference about itself 
console.log(userTwo)


// #########################################################################################################################
// By using constructor method let us make a car manufacturing database:=
// Volkswagen is the company

function cars(model , price , year){
    this.cars = model;
    this.price = price;
    this.year = year;
}

const carOne = new cars("polo", "7lacs","2004")
const carTwo = new cars("virtus","21lacs","2023")
const carThree = new cars("Tiguan", "17lacs","2021")

console.log(carOne)

// this is how by using constructor function we can create multiple function objects and add to the database but donot have to write a hardcoded codes again and again.

// ###############################################################################################################################

