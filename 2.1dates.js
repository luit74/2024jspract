// date is generally calculated in mili seconds . 

// DATES

let myDate = new Date()
// console.log(myDate) /** as we can see that this is not readable .  */
// console.log(myDate.toString()); /** here we have converted it to a string after which it makes a sense alittle */
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// these are the several different methods to change it to readable dates 

// typeOf date is Object (interview question)

// ############################################################################################################################

// this is how we can create specific date.
let createNewDate = new Date(2023,0,27) /** note that in js the month start from 0 . */

console.log(createNewDate.toDateString())

// ###################################################################################################

// TIMESTAMPS:

let myTimeStamps = Date.now()

console.log(myTimeStamps.toLocaleString())

// watch the date video for more concept clearity. 

