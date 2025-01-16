// Variables : we can declare variable in three types
// let , const , var
// const = once declared then it cannot be changed
// var = var is a globally scoped and let is blocked scope 0
// let = it is blocked scoped.


const accountId = 122333
let accountEmail = "luit@gmail.com"
var accountPassword = "12345"
accountCity = "Guwahati"

{
  var accountPassword = "54321"
  console.log(accountPassword);
}
console.log(accountPassword); //we can see that var value has been changed because it is globbally scoped . 

{
  let accountEmail = "Dusad@gmail.com"
  console.log(accountEmail);
}
console.log(accountEmail);  // but here we can see that accoutEmail is not changed because let is blocked scoped . we cannot re assign its value outside the block scope.



console.table([accountId , accountEmail , accountPassword , accountCity]) //this way we can run multiple variables at once and the result will be in tabular style.

// accountId = 12233455 // as we can see we have declare this variable with const so it is fixed and we cannot change it .
console.log(accountId);



let example;
// if we define a variable and does not assign any value to it then it will be undefined , when we console.log.



// ########################################################################################################################

//  ##### this way we can check the type of the declared variables

const score = 69;
const score2 = "sixty nine";

console.log(typeof score);
console.log(typeof score2);

console.log(typeof undefined); /** undefined */
console.log(typeof null); /** objects */

// null = null means variable is declare but it is empty
// undefined = it means variable is defined but value is not assign to it .    

/** but if the value is null then the output is NULL the value is 0*/
/** and if the value is undefined then the value is NaN */
/** if there is a "" empty parenthesis then the value is 0 */

// #####################################################################################################################

// ##### we can join two strings , concatinate 

const str1 = "Luit ";
const str2 = "Dusad ";

const combined = str1 + str2; /** this is a outdated method instead of this we use back ticks . for better string interpolation*/

console.log(
  combined
); /** as we can see in the result that we can join the two strings */

// #################################################################
// basic concepts of string

console.log(1 + 2);
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "1" + 1)

// in line 26 & 27 we can see that all the values has been changed according to the first data type , if it is string then everything is string , if the first value is a number then everything is treated as a number .

// #################### PREFIX AND POSTFIX

let counter = 10;
++counter; /**the increment operator increments and returns the value after incrementing. */
console.log(counter);

let counter2 = 10;
counter++; /** the increment operator increments and returns the value before incrementing. */
console.log(counter2);

// ########################################################################################################



let x = 3;
let y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// #########################################################################################

// there are two types of memory that is stack memory and heap memory

// stack memory example

let myName = "Luit Dusad";
let newName = myName;
newName = "James";

console.log(myName);
console.log(newName);

// number booleans strings all these values goes and get stored under stack memory
// all these values are called primitive data types

// in stack whatever we change we make the change in the copy of the not in the original data
// thats why the value of the original memory remains the same

// heap memory example
// all the arrays and the objects are stored in the heap memory
// and we get the reference of the memory and the actual or the original data gets changed when we change the data

// ##############################################################################################################################

// comparision operator.

console.log(null > 0); /** false*/
console.log(null == 0); /** false */
console.log(null >= 0); /** true */

// therefore can see different results.
// the reason is that an equality check == and comparision ><>=<= work differently.
// comaprision convert null to number , treating it as 0.
// thats why null >= 0 is true and null>0 is false.

// #########################################################################################################################

// study and explore the various methods of strings in MDN. 

// questions from chatGPT :
// 1: Write a function getStringLength that takes a string as an argument and returns its length.
// 2.Write a function concatenateStrings that takes two strings as arguments and returns their concatenation.
// 3.Write a function getSubstring that takes a string and two numbers (start and end indices) as arguments and returns the substring from the start index to the end index.
// 4.Write a function convertCase that takes a string as an argument and returns an object with two properties: uppercase (the string in uppercase) and lowercase (the string in lowercase).
// 5.Write a function replaceSubstring that takes a string, a substring to be replaced, and a replacement string as arguments. The function should return the new string with all instances of the substring replaced by the replacement string.
