// control flow or logic flow

// instead of const or let if we use var then we can access the variable outside the scope {} , in the global context // which is wrong thats why we donot use var

const score = 200

if(score > 100){
    const power = "FLY"
    console.log(`the power is ${power}`)
}

console.log(`the power is ${power}`) /** (1) as we can see we have an error because we have used const or let instead of var */

// in line 8 instead of const if we use var then we will be able to access the variable outside the scope . but this is wrong method

// ###################################################################################################################

// SHORT HAND notation
// 

const balance =  1000

if(balance > 500) console.log("test"); /** we can write everything in a single line , without using the scope */
// this is called implicit scope 
// there is a semi colon in the end because it execute in a single line

// #####################################################################################################################

// && operator
// where both the condition should be true then only we will enter the scope{} to execute the function

const userLoggedIn = true
const debitCard = true
const userLoggedOut = false

if (userLoggedIn && debitCard) { /** if both the conditions are true then only we will enter the scope {} */
     console.log("Hello World!")
}

// if any one of the condition is false then it will not run

// || or operator , where we check either the statement A is true or the statement B is true
// it check multiple condition if any one of them is true then it will execute the code 

if (userLoggedIn || userLoggedOut){
    console.log("HAHA WORLD!")
}

// #######################################################################################################################

// SWITCH CASE 
// where there will be a key and we will check multiple value.

const month = 6 //THIS IS THE KEY

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default: 
    console.log("default case match")
        break; }

        // in case of string
const months = "april"

switch (months) {
    case "january":
        console.log("January")
        break;
    case "february":
        console.log("February")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        break;

    default: 
    console.log("default case match")
        break;
}

// ###########################################################################################################################

// truthy value falsy value

// FALSY VALUES :-
// false , 0 , -0 , BigInt , "" , NULL , undefined , NaN

// TRUTHY VALUES:-
// "0", "false" , " ", [], {} , function(){}

// ###############################################################################################################################

// HOW TO CHECK IF AN ARRAY IS EMPTY OR NOT

const usermail = []

if (usermail.length === 0){
    console.log("this is an empty array")
}


// // HOW TO CHECK IF AN OBJECT IS EMPTY OR NOT

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("this is an empty object")
}

// ##############################################################################################################################

// general knowledge

// false == 0 , this is true
// false == "" , this is true
// 0 == "" , this is true

// ##########################################################################################################################

// Nullish  coalescing operator (??) : null undefined 