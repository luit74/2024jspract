
// we can declare objects in two style one is literals and constructor
// when the object is build using literals it is never singleton , whereas with constructor it is always singleton.

// #########################################################################################################

// OBJECT LITERALS. 
const userJs = {}  /** this is a non singleton object */

// constructor objects
Object.create() /** singleton */

const userJs1 = new Object() /** this is a singleton object */

// #################################################################################################################################

// BASIC structure of objects 
// symbol to put inside an object //  using the correct syntax is the right way.

const mySym = Symbol("key1") /** this is a unique data types called as symbols , this is primitive. and this is how we declare symbols */

const agent1 = {
    name: "Luit",
    [mySym]: "myKey1", /** if we want to use it as a symbol in an object we will have to use [], this is the syntax */
    age: 24,
    gender: "Male",
}

// this is how we can rewrite or overwrite an object
agent1.name = "Jimmy"

Object.freeze(agent1) /*this way we can freeze an object so that no over writting can be done*/
agent1.name = "Johny" /* as we can see this line is not over write on the objects */


// to declare the objects
console.log(agent1)

// to specifically call a key value: by using dot -- .notation
console.log(agent1.name);

// to specifically call a key value: by using square [] notation , we use this when the key is defined as a string for eg."age" if in the object age is defined in the "" then we will use [] notation.
console.log(agent1["age"]); 

// and also if we want to access the object data types.
console.log(agent1[mySym]) , /** we will use this inside a square bracket.  */
// this is important from interview perspective.

// ###########################################################################################################

agent1.greeting = function () {
    console.log("Hello this is Luit this is side.")
}

// here we have use this function to access the properties of an object.
agent1.greetingTwo = function () {
    console.log(`Hello this is ${this.name} this is side.`) /*  .this method is used to access all the properties inside an object */
}


conse.log(agent1.greeting())
console.log(agent1.greeting)
console.log(agent1.greetingTwo())

// ##########################################################################################################################


// #######  HOW TO DECLARE AN OBJECT USING LIETRALS AND CONSTRUCTOR ###########

// this way we can declare the object first and then assign it's value.

const data = {}

data.name = "Jimmy",
data.age = 25,
data.nationality = "Japan" /**  ###  BY THIS WAY WE CAN ADD ITEMS TO OUR OBJECTS EXTERNALLY */

console.log(data)  


// #############################################################################################################

// 5
// ##### WE CAN ALSO DECLARE AN OBJECT INSIDE AN OBJECTS , LET'S SEE HOW 


const fruitsVendor = {
    area: "Guwahati",
    details: {
        name: "Ramu",
        place: "paltanBazar",
    },
    area2: "Dehradun",
    details2: {
        name: "Shanu",
        place: "Dhoolkot",
    }
}

// this is how we can add objects under objects  //// called as NESTED OBJECTS.
// HINT if there is a question mark in the nested object in place of dot . this means its checks if the key value which we are calling is present or not 

console.log(fruitsVendor.details.place)
console.log(fruitsVendor.details2.place)

// ##############################################################################################################################


// here we will learn how to combine objects , how to combine two objects

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
// const obj3 = { 5: "c", 6: "d" } //remove obj3 comment use it to check {} method of merging objects

const obj4 = Object.assign({}, obj1, obj2,) /** by using this Object.assign we will be able to combine two different objects */
// we have used this {} because as we know if there is only two obj then one will be target and one will be source so the obj will merge in obj1 but if there is multiple object then all the other obj like obj2 , obj3, obj4 etc etc will merge in the empty bracket i.e is source and act as an object

console.log(obj4)

// ### lets learn the second method of merging objects , which we will use 90% of the time.
// this is called spread operation
const newObject = {...obj1, ...obj2} /** we will use the spread operation most of the time. */
console.log(newObject)
    
// #############################################################################################################################

// we can also call for the only keys or the values
console.log(Object.keys(fruitsVendor)) /** we can notice that the output is displayed in array  */
// we can do the same with the value pairs also 

// But if there is no keys or values the system might crash , to deal with such situation we will use .hasOwnProperty method 

console.log(Object.entries(fruitsVendor)); /** here it converts all the key value pairs into an array. */

// #########################################################################################

// De-structuring in array

const course = {
    coursename : "stock market ka maza",
    price: 999,
    instructor: "Luit Dusad"
}

const {coursename} = course /** as we can see we have directly extracted the value of the object without declaring it to an object   */

console.log(coursename)

const {price: kimanDaam} = course /**AS we can see that we can assign different names and call or print them out */

console.log(kimanDaam)

// #####################################################################################################################

// JSON API 
{} /** this is JSON . this is a kind of object which doesnot have a name in it . | */


// JSON formattor in google is a website where we can study the API in a easier way . for better understanding. 