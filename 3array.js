// CONTENTS:-
//  1. NORMAL ARRAY
//  2. PUSH POP & SHIFT unshift
//  3. qUESTIONAIR METHODS
//  4. .JOIN METHOD
//  5. SLICE AND SPLICE
//  6. .flat method
//  7. convert multiple variable into array.



// ********************************************************************************************


// Q3. here we have combined different array into a single array

const array1 = [1,1,1,1,1]
const array2 = [2,2,2,2]
const array3 = [3,3,3,3]
const array4 = [4,4,4,4]  

const newArray = array1.concat(array2,array3,array4)

console.log(newArray)

// ###################################################################################################################



// General format of writing an array

const myArr = [0,1,2,3,4,"Luit"] /** within a single variable all the elements are kept */

// array elements cannot be accessed using arbitary strings
// it makes shallow copy i.e it has a same refernce point , which means whatever changes will be made it will be done on the original copy also
// it is 0 based indexing

console.log(myArr[5]) /** this way we can target a perticular elements to print in array */

// this a different method to declear an array 
const myArr2 = new Array(1,2,3,"Luit")   /** by using Array() we can declare array */
console.log(myArr2[3])

// ###### PUSH AND POP IN ARRAY #######

// PUSH
myArr.push("Dusad")
console.log(myArr)
// As we can see there is a new element in myArr i.e is dusad

// POP
myArr.pop()
console.log(myArr)
// AS we can see the last items has been removed from the array .

// it follow the last in first out in push and pop method

// UNSHIFT()
//  this is method in array where we can add elements in the begining of the array this is very less used but it is used
// but the only problem with this is that it shift or chnage the index value of all the other elements which may give load to the computer ,  suppose if there is 10,000 elements in the array then it will shift all the 10,000 elements which can cause load to the computer

myArr.unshift("haha")
console.log(myArr)

// SHIFT()

myArr.shift()
console.log(myArr)
// As we can see by using the shift operation we can see the element added to the begining of the array is being removed
// this is very similar to pop() but shift remove only the value which is added by the unshift() method or from the begining

// ##################################################################################################################

// ### Questionair methods in JS , where we only ask question to the array wheather it includes the items or not and it gives answer in boolean
// .includes()  -- is one of them
// .indexOf()

console.log(myArr.includes("Luit"))

// ### similar to this there is also another method which is called indexOf() , where we can ask the index number
console.log(myArr.indexOf(5)) /**As we can see the value is in -1 , it is because the value doesnt exist in the array */
console.log(myArr.indexOf("Luit"))

// ######################################################################################################################

// ### .join() --- this method is used to convert an array into a string
console.log(myArr.join())

// ######################################################################################################################

// #### SLICE AND SPLICE
// a.  one method manipulate the original and one dont 
// b. slice doesnt manipulate the original array , it just give the output of the range that we provide but does not include the last number
// c. splice manipulate the original array , it filter outs the range from the original array , leave the remaining behind in the array

const newArray1 = [1,2,3,4,5,6,7,8,9]
console.log("A", newArray1)

const newArray2 = newArray1.slice(1,4) /** here we have call for the limited range */
console.log("B", newArray2)

const newArray3 = newArray1.splice(1,4) /** it will extract the range and manipulate the main array , the last value will be added. */
console.log("C",newArray3)

// ###############################################################################################################################


// ARRAYS take any type of data : 
// 1. it takes arrays as data , i.e if we push an array inside an array , it will take it as a single element.
// 2.



// ###############################################################################################################################

// ##### how to concat (Link) two different arrays

const fruits = ["apple","banana","mango"]
const veggies = ["potato","cabbage","onion"]

const newNew = fruits.concat(veggies) /** by using this method we can concat or link two different arraies- */

console.log(newNew) /** it combines and create a new array */


// ### we can do the same using the spread operator 

const spreadOp = [...fruits , ...veggies] /** the spread operator is mostly used  */
console.log(spreadOp)

// an array takes all kinds of data types as its elements
// if we want to concatinate the value of the in an array then we will have to create a variable and then store the spread operation array in it .
// console.log(...fruit,...veggies) , this will concat all but won't print an array.

// ##########################################################################################################################


// ##### here is another method which is called .flat() , this is used to unwind all the concat arrays into 1

const concatArr = [1,2,3,[3,4,5,[6,7,8,9],45,[99,89]]]
const uncontArr = concatArr.flat(Infinity) /** here the infinity is nothing but the depth upto how much we want to unwind the arrays */

console.log(uncontArr)

// ################################################################################################################

console.log(Array.isArray("luit dusad")) /** this way we can ask if it is an array or not  */
console.log(Array.from("luit dusad")) /** this way we can convert into an array */
console.log(Array.from({name: "Luit"})) 
// imp from interview perspective : whenever we create an array like this . we will have to mention it . whether we want to make array of the key or the value . if we donot mention that then it will us an empty string .

const obj = {
    "name" : "luit",
    "age" : 24,
    "gender": "male"
}


console.log(Array.from(Object.values(obj)));

console.log(Array.from(Object.keys(obj)));

// ###################################################################################################################

// this way we can convert multiple variable into array.

let scr1 = 100
let scr2 = 200
let scr3 = 300

console.log(Array.of(scr1,scr2,scr3))



// ********************** 
// practice question

/* Find the Largest Number in an Array:

Write a function findLargestNumber that takes an array of numbers as an argument and returns the largest number in the array.


Remove Duplicates from an Array:

Write a function removeDuplicates that takes an array as an argument and returns a new array with all duplicates removed.


Array Reversal:

Write a function reverseArray that takes an array as an argument and returns a new array with the elements in reverse order.


Check if Array Contains an Element:

Write a function containsElement that takes an array and an element as arguments, and returns true if the array contains the element, and false otherwise.


Sum of Elements in an Array:

Write a function sumArrayElements that takes an array of numbers as an argument and returns the sum of all the elements in the array.*/


// ##########################################################################
// Filter:
// Purpose:

// filter is used to iterate over an array and filter out elements based on a provided function.
// It returns a new array containing only the elements that pass the condition specified in the callback function.

// Map:
// Purpose:

// map is used to iterate over an array and transform each element in the array based on a provided function.
// It returns a new array with the transformed elements.