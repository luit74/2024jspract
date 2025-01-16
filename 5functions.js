// we cannot study functions alone we will have to study about some memory management as well
// laymen defination --- think function as collection of code which is responsible for some specific operation , which u can use it anywhere without even writting the entire code again.

// {} this is called as the scope of a function , where we write the code of a specific operation

// basic function structure is shown below
function sayMyName () {
    console.log("Hi my Name is Luit Dusad")
}

sayMyName() /** As we can see we can print the function without even using console.log */

// ########################################################################################################################


// PARAMETERS AND ARGUMENTS

function add (n1,n2){      /** as we can see n1,n2 , these two are known as parameters,  */
    return(n1 + n2) /** here we have applied the mathematical operation */
    // when we return something then we can store than value in some variable for future use 
    console.log("hello world") /** in function after a return of value no other operations can be executed */
}

const result = add(2,2) /** here we have declared two arguments */
console.log(result)

// we have to console.log it out to see the results other it wont print by just passing the arguments in the function. 

// #########################################################################################################################

// build something where u have greeted the user who have logged in just now

function loginUserMessage(username){
    return `${username} has just logged in.` /** as we can see , whatever will be the argument value same will be variable value and greet the user , with his name. */
}

const greeting = loginUserMessage("Luit") /** if we just call the function without storing it to any variables then it will run the function but it won't print anything . for that we have to console.log it out with the value stored in the variable */
console.log(greeting)

console.log(loginUserMessage("Luit"))    /** this way also we can print it . but storing it to a variable help us for further use */
// and if we donot pass any arguments then it will show undefined when we console.log 

// ##########################################################################################################################

/** HERE WE WILL CODE THE SAME THING BUT WE WILL USE IF ELSE STATEMENT TO UNDERSTAND THE RETURN CONCEPT BETTER AND ALSO TO SEE IF WE DONOT PASS AN ARGUMENT WHAT HAPPENS */

// AS WE KNOW IF WE DONOT PASS AND ARGUMENTS THEN ITS undefined

function loggedinMessage(name) {
    if (name === undefined){  /** (!username){} sometimes we might see a code similar to like this which is equivalant to the code which is written above . ! means ulta , sab cheez ka ulta , AS we know  undefined is false . so !undefined is true. */
        console.log("Please Put A name value to see the output message")
        return /** here we have used the return because if this section  runs then we donot want something else to run also */
    }
    return`${name} welcome to the world of MAYA`
}

const message = loggedinMessage() /** no arguments means undefined if the parameter is mentioned
 */
console.log(message)

// #################################################################################################################################

// IF THERE IS MANY ARGUMENTS TO PASS THEN HOW WILL WE WRITE THE CODE
// WE WILL USE REST OPERATOR TO PASS MULTIPLE ARGUMENTS 

function calculation (...num){ /**as we can see the 3 dots that we know as spread operator  */
    return num
}

console.log(calculation(22,223,231,344,445,33)) /**as we can see we have passed multiple values , and all this values will be stored in an array */

// ################################################################################################################################

// How to use an object in a function

const user = {
    name: "Luit",
    age: 24,
    gender: "Male" /** first we will create an object */
}   

function handleObject(anyObejct){
    console.log(`name is ${anyObejct.name} and the age is ${anyObejct.age} . `)
}

console.log(handleObject(user))
console.log(handleObject({  /**in this same way we can pass objects also above method and this method is same . */
    name:"Jimmy",
    age: 20
}))

// ################################################################################################################################

   const newArray = [11,22,33,44,55,66,77,88,99]

   function returnSecondvalue (getAway){ /** get away is just a name to access the value from the array */
    return getAway[2]
   }

   console.log(returnSecondvalue(newArray)) /** here we have to give the array name as an arguments */

//    ##############################################################################################################################

// GLOBAL and LOCAL SCOPE
// scope is a very impor