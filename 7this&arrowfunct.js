// THIS & ARROW FUNCTION IN JAVASCRIPT
// this :- is referred to the current context 

const obb = {
    name : "Luit",
    gender: "Male",
    welcomeMessage: function(){
        console.log(`welcome ${this.name} and you are a ${this.gender}`); /** so we have use this function to call and use the data from the current object */
    }
}

console.log(obb.welcomeMessage())
obb.name = "Jimmy"
console.log(obb.welcomeMessage())

console.log(this) /** (1) as we can see the output is {} empty parenthesis , this is because in the global level the current context is nothing , so it prints empty parenthesis  */

// BUT INSIDE THE BROWSER WHEN WE DO THE SAME , IT SHOWS WINDOW , IN BROWSER THE GLOBAL OBJECT IS WINDOW not an empty {}

// ###########################################################################################################################

// ARROW FUNCTIONS
// BASIC STRUCTURE

const addTwo = (n1,n2) => {
    return n1 + n2
}

const newAdd = addTwo(2,2)

console.log(`the above addition is equals to ${newAdd}`) /** we can write the same line of code without assigining it to a variable */

// WE WILL WRITE THE ARROW FUNCTIONS IN AN IMPLICIT FUNCTION TYPE :  this is a different style of writing the same set of code

const addAnother = (n1,n2) =>( n1 + n2 )/** this is implicit style of writing the code */
// if we use the curley brases then we will have to write return but if we use () then we dont have to write return


const newAddAnother = addAnother(3,3)

console.log(newAddAnother)

// ###############################################################################################################

// if we want to return an object by using implicit functions

const add = (n1,n2) => ({username: "Luit74"})

console.log(add(2,2))

// ##################################################################################################
// THIS IS NOT ARROW FUNCTION BUT IT IS A WAY TO WRITE A CODE IN SHORT WAY
// SHORT HAND NOTATION

// SHORT HAND notation
// 

const balance =  1000

if(balance > 500) console.log("test"); /** we can write everything in a single line , without using the scope */
// this is called implicit scope 
// there is a semi colon in the end because it execute in a single line