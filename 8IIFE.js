// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS 
// IIFI are the functions which we want them to run immediately
// in IIFI we mostly declare the coonection of database or connect to database
// sometimes global scope k pollution se problem hoti hai kahi bar toh isiliye we want this functions to run immediately

// as we have learnt in the previous chapter if we wrap the function in parenthesis() then it allows us write short codes which are synthetically correct , for example

(function hello(){
    console.log("DB connected 1")
})();    /** as we can see we have locked the function in parenthesis aswell so that i does not give error*/

// ##################################################################################################################################

(()=>{
    console.log("DB connected 2")
}) (); /** this is the same line of code using arrow function */


// if we dont use ; semi colon in the end then it will cause an error because js donot know where to end the function , so we will have to tell js to do it. first code run hoke khatam ho gaya then second code run ho

// we have used () directly after the function because we have we want the function to run immediately

// ##################################################################################################################################

// LETS INVOKE PARAMETERS AND ARGUMENTS

((name)=>{
    console.log(`Welcome to the World Mr.${name}`)
})("Luit")

//  as we can see we have successfully invoked the arguments in the IIFI

// interview question :- write two IIFI in a single page.

// there are named IIFI and unamed IIFI . a function which have a name is called the named IIFI and a function which doesnot have the name is called the unnamed IIFI. therefore in an interview if we are asked to write named or unnamed . then we will write it accordingly.


