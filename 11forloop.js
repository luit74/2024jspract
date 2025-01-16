// loops also known as iterators
// Understand the syntax of for loops , this is same across the the language 
// print from 1 to 10

for (let index = 0; index <= 10; index++) {
    const element = index; /**instead of index we can write i */
    console.log(element)
}

// 1. let index = 0 :- this is the declaration of the loop , and also the initial position of the loop
// 2. index <= 10 :- this is condition check for the loop
// 3. index++ :- this is the increment operator 
// 4. the loop runs again and again and print the number until it reaches the satisfied condition

// #############################################################################################################################

// loop inside the loop

for (let i = 0; i <= 10; i++){
    console.log(`outer loop value is ${i}`);
    for (let j = 0; j <= 10; j++){
        console.log(`Inner loop value is ${j} and the outer loop value is ${i}`)
    }
}

// #############################################################################################################################
// CREATING A TABLE USING A LOOP

for (let i = 0; i <= 10; i++ ){
    console.log(` the table of ${i} is :-`);
    for (let j = 1; j <= 10; j++ ){
        console.log(i + '*' + j + '=' + i*j )
    }
}   

// ######################################################################################################################

// HOW TO PRINT AN ARRAY USING A FOR LOOP

const myArray = ["apple","banana","orange", "mango", "chicku"]

for (let index = 0; index < myArray.length; index++ ){ /** .lenght is a method by which we can access the full length of the array without counting .*/
// if we use <= instead of < then the array will go out of the array and give undefined as the result 
    const element = myArray[index] /** if we donot use [index] then it prints all the arrays multiple times w.r.t the number of arrays present in the list. */
    // console.log(element)
}

// #############################################################################################################################

// if we want to show or print limited data using for loop without going to the end:-
// 1. break and 2. continue

// this is how we use break function to break the running loop

for(let index = 0; index <= 10; index++ ){
    if(index === 5){
        console.log("5 is detected");
        break
    }
    console.log(`the count is ${index}`);
} /** wherever this break comes in after that it goes out of this scope completely */

// continue keyword -- in the continue keyword it doesnot goes out of the scope . it just skips the 5 and print rest of the results.

// in continue we use instead of break where it will detect 5 and skip , it will not print 5 but it will continue