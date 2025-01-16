// to understand closure , first we will have to study lexical

// closure is basically a function which has another function inside it , in which we can access the properties of the outer function from the inner function . 

// lexical scope 
// function inside a function can access the outer function
// from the beginning if we start there is a global execution context {}, in which we define a function which bring its own execution context {},  and inside that there is another function which has its own scope {} or execution context . 

function outer(){
    let username = "Luit"
    function inner(){
        let secret = "my123" /** suppose we have declared a variable inside a function what will happen if we want to access in some other function */
        console.log("inner", username);

    }
    // suppose there is more than one inner function. at that time what will happen
    function inner2(){
        console.log("Inner Two", username)
        console.log(secret); /** here if we try to access the variable of the inner function we wont be able to */
        // this is because child can access the parents , but it wont be accesible among there siblings
    }
    inner2()
    inner()
}
outer()
console.log("TOO OUTER", username)

// ######################################################################################################################

// 1. as we can see we have created a function inside which we have created another function. 


function makeFunc(){
    const name = "Luit";
    function displayName(){
        console.log(name);
    }
    return displayName; /** 2. but in return we have given the reference of the of the inner function , now the question is what will happen. */
}
// 3.so when we return the function then we will not only be able to acces the scope of the displayName but the entire scope i.e the lexical scope . which means it will return the entire scoope in which it is existing . and it is existing in the makeFunc() so we will be able to access the makeFunc() elements also .  therefore which let us to get access of the const name variable . and this is called closure.

const myFunc = makeFunc();
myFunc()