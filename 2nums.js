const score = 400
console.log(score)

const balance = new Number(200) /**this way we can dedicatedly define a number . expected output - [Number: 200]  */
console.log(balance)
// output is Number: 100 ,because javascript specifically tells balance to print a number . it is because of new

// ##############################################################################################################################

// to convert number to string
// sometimes we change a number to strings because there additional properties in which we can use which are not available in numbers 
// such as .length,

console.log(balance.toString()) /** this way we can convert it to a string */
console.log(balance.toString().length); /** and add verious properties of strings after that. */

// ###############################################################################################################################
// when we want a precised value then we use .toFixed()

const val = 20
console.log(val.toFixed(2)); /** 2 is the value and we always have to provide a value. how precised we want . value cn be anything instead of 2. */
// expected output -  20.00 
// we will use this method mostly in E-com website .

// ##############################################################################################################################

const val1 = 212.9033
console.log(val1.toPrecision(3)); /** as we can see the value is 213 , this is because it rounds off the value */
// and always note that it returns the value in a string.

// #################################################################################################################################

const val3 = 1000000
console.log(val3.toLocaleString()); /** this converts the value to a string and put commas in the US format ---- ('en-IN') with this we can change it to indian if it is not comming in indian format */

// #############################################################################################################################

// Math() function

console.log(Math.abs(-4)); /** abs -- absolute value - it converts negative values to position . not vice versa */

console.log(Math.round(4.6)); /** it rounds off the value . */
console.log(Math.ceil(4.6)); /** if we want to select the upper round value */
console.log(Math.floor(4.6)); /** if we want to select the lower round value. */
console.log(Math.min(3,4,2,6,8,9)); /** it helps us to print the minimum value  */
console.log(Math.max(3,4,2,6,8,9)); /** it helps us to print the maximum value  */

// ***************************************************************************************************
// MOSTLY USED FUNTION
// Math.random()

console.log(Math.random()) /** it gives us random number between 0 - 1 */
console.log(Math.random() * 10); /** by multiplying it with 10 we shift one point and can print from 0 - 9*/
console.log((Math.random() * 10) + 1); /** by adding + 1 we can get the range from 1 to 10 now */
console.log(Math.floor(Math.random() * 10) + 1); /** we round it of to a single value */

// suppose we want a specific range then we will do the following

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min) /** this way we can set a range */
// this is a specific formula to set a range memorize it