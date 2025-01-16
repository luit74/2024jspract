// GLOBAL SCOPE AND LOCAL SCOPE , IT IS VERY IMPORTANT IN JS

if (true){ /** {} this is the blocked scope and outside this scope this is called global scope */
    let a = 10
    const b = 20
    var c = 30 /** we donot use var because it can be accessed outside the scope which can create an issue. */
}

// from global scope we can access inside the block scope. but from the global scope we cnnot access the blocked scope

// ############################################################################################################################

let a = 100;
const b = 200;
if (true){
    let a = 10;
    const b = 20;
}
console.log(a); /** as we can see there are 2 a and 2 b varibales avaible in the blocked and global scope */
console.log(b); /** whhich one will get printed .  */

// the varible declared in the global scope will be printed . this small concept will help us to debug many times

// ##############################################################################################################################

// the scope or the global scope which we check in the browser>inspect>console is different from the scope in the code environment (VS CODE)which we run using node 

// ############################################################################################################################

// {} THIS IS SCOPE 
// WHENEVER WE DECLARE SOMETHING UNDER A SCOPE IT SHOULD NOT GO OUTSIDE THEN SCOPE AND RUN AND GIVE THE OUTPUT
 

// #############################################################################################################

function one(){
    const username = "hitesh"
    
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    console.log(website); /** 1st error here though we have console.log this line but it will cause an error because we are out from function two and we can cannot access the data stored in website anymore . as we can see it is out from the function two*/
    
    // it follows the rule that smaller function can access the bigger function but the bigger function cannot acces the smaller one
    // thats why we can see that when the console.log(website) is called it is out from the function two and was part of function one , which is the bigger function so we cannot access it

    two()
}

one()

// all we learn is that from bigger functions we can call and use in smaller function , but we cannot call from smaller function and use it in bigger function 

// #############################################################################################################################
// INTRESTING

// Expression :- these are variables where functions are stored 

const thisExprsn = function(num){ /** this is an expression where we have stored the function in a variable */
    return num + 2

}

console.log(thisExprsn(2)) /** and then we can use the variable as the function and pass arguments as well */

// this concept is called hoisting

// #########################################################################################################################

