// basic structure of while loop
while (condition) { /**this is the basic structure where we check the condition if it is true then only we will enter the scope */

}

let index = 0
while(index <= 10){
    console.log(`value is ${index}`);
    index++ /** this is for increment , so that it increases and exit the scope */
}

// ############################################################################################################################

// printing an array using while loop.
// whenever we print array we will always use < not <= , beacuse <= lead us out of the array which is undefined

const myArray1 = ["apple","banana","orange", "mango", "chicku"]

let arr = 0
while(arr < myArray1.length){
    console.log(`value is ${myArray1[arr]}`) /** if we directly type arr then it will print the index number of the array not the values */
    arr = arr + 1
}

// #########################################################################################################################

// DO WHILE LOOP

let score = 1
do {
    console.log(`score is ${score}`)
    score++
} while (score <= 10);

// #########################################################################################################################


let score1 = 11 /** we can even exceed the limit and print the value. */
do {
    console.log(`score is ${score}`)
    score++
} while (score <= 10);

// it is very common to apply loop in the array because all the data which we fetch from the data base is always in the form of array only