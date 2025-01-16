// ALL THESE LOOPS ARE ARRAY SPECIFIC LOOPS

// 1. for of loops:-

const arr = [1,2,3,4,5]

for (const num of arr){ /** num is just a variable and it can be anything */
    console.log(num);
}

// if we use the break function then it also prints the value === to break
// we can also print a string

const greetings = "Hi , Luit"
for (const greet in greetings){
    console.log(`each char is ${greet}`);
}

// it gives us output in the form of an array.

// ##############################################################################################################

// 1. MAP

const map = new Map()/** Map() itself is an object which holds key value pairs , for more information read online */

map.set('IN', 'INDIA')
map.set('US', 'UNITED STATES')
map.set('FR', 'FRANCE')
map.set('GB', 'GREAT BRITAN')
map.set('IN', 'INDIA') /** AS WE HAVE TYPED INDIA AGAIN BUT IT WILL NOT BE PRINTED BECAUSE MAP IS KNOWN FOR IT'S UNIQUE VALUES , it does not repeat the same value*/

console.log(map)

// if we want to print the key and value seperately then

for (const [key,value] of map){ /** instead of key and value we can use anything but for better understanding we use this */
    console.log(key)
    console.log(value) /** this is how we can print key and value individually */
}

// objects are not iteratable (iterate means perform repeatedly)
// we can iterate objects using different style

// #################################################################################################################################

// FOR IN:=

const newObject = {
    js : 'Javascript',
    py: 'python',
    rb: 'ruby',
    cpp: 'c++'
}

for (const key in newObject){  /** here key is just a name of the varivable which can be anything but we have used key to sound meaningful */
    console.log(`${key} is abbriviation of ${newObject[key]} `)
}
// as we can see there is 1. ${key} & 2. ${newObject[key]} and we also know key used here is just a name of the varibale 
// 1. ${key} is used to access the key of the objects
// 2. ${newObject[key]} is used to access the values . Where we have used the name of the object i.e newObject and then in [] we have define whose value we have to access
// 3. if we use for of loop with objects it shows that for loop is not iterable error.

// ####################################################################################################################

// 1. for objects we will use FOR IN loops 
// 2. for arrays we will use FOR OF loops


// ############################################################################################################################

// mostly used loops

// FOR EACH Loops . which is an inbuilt function in array , which is used to print all the items in the array. 

const codingLang = [ 'js', 'c++', 'python', 'ruby']

codingLang.forEach((haha)=>{ /** instead of haha we can use anything to access the value stored in the array . It is the name of the variable only which can be anything */
// in forEach() there is a callback function . this is nothimg but a function which ask for a function ki kya karna hai abhi
    console.log(haha)
})

// ##############################################################################################################################

// we can also create and store the function somewhere else and just call for it in the forEach loop. 

const langArr = ['hindi', 'assamese','punjabi','manipuri']

function printLang(items){
    console.log(items)
}

langArr.forEach(printLang)
// as we can see we can create the function somewhere else and calling it inside the forEach() function.
// and also notice that we have not execute or run the function printLang() like this . we have just given the referance like printLang


// ########################################################################################################################################

// multiple objects under array
// it is very important because when connect with the database all the objects are in this form only

    const myCodingLang = [
    {
        languageName: 'javascript',
        abbriviation: 'js'
    },
    {
        languageName: 'python',
        abbriviation: 'py'
    },
    {
        languageName: 'java',
        abbriviation: 'java'
    }
]

myCodingLang.forEach( (items)=> {
    console.log(items.languageName)
    console.log(items.abbriviation) /** as we can see we can easily access the objects in the array individually using for each loops */
} )

// for each doesnot return value that means we cannot store it in a variable . So for that reason we use .filter()

// #########################################################################################################################

// .filter() , here we can return and store the value.

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4 ) /** in this line we have use .filter and also we have store it in a variable */
// inside that filter function we have used a callback function , to what to do. but after that we have to give a condition . in our case num > 4 . And whoever satisfy this condition will get return and printed
// and we donot use {} or return because it is an immediatly invoked function 
console.log(newNums);

// ############################################################################################################################


// CHAINING :- where we can use multiple method in a single line
// for eg :- const newNums = myNums.map().filter()
// in this way we can use multiple method and make a chain . So it is called chaining. 

const myNewNums = [1,2,3,4,5,6,7,8,9,10]

const newNumber = myNewNums 
                  .map( (num) => num * 10 ) /** for better understanding we are writing this on the next line . so that it doesnt create confusion. */
                  .map( (num) => num + 1 )
                  .filter( (num) => num >= 50 )

console.log(newNumber)

// ##########################################################################################################################

// .reduce() function
// we use this in shopping cart .

const list = [1,2,3]

const myTotal = list.reduce( (accumulator , currentValue) => accumulator + currentValue , 0 ) /** we use 0 because it is a starting point for the accumulator. */

console.log(myTotal)