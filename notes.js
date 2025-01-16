// 1. LTS(long term support) version node js is used if we are working on a production based project . 


// 2. in js if we declare a variable and doesnot give any value then it will be undefined . FOR eg 
        let name; /** as we can see we have just declared the variable but not assign any value so its undefined */


// 3. console.table([name, of , all, the , varibles , here]) , this way we can console.log multiple cases at once .


// 4. we do not use var because of issue in block scope or functional scope . for eg we have declared a varibale by the name of 
        var password = 123;
    // if we create another file and inside that file we declare another password lets say 
        var password = 543;
    // then the password in the first will get manipulated and cause problems.


// 5. a variable can also be declared without using let or var . but this is not a good practice or prefered anywhere.
    password = "abc"; /** this is possible but not preferred. */



// ##################################################################################################################################

// ECMA:-

// https://tc39.es/ecma262/ 

// this is the official documentation of the ECMA script . but we also have mdn.com which explains in a goodway.


// ##################################################################################################################

// conversion & operation

let score1 = 99 /** this is a number  */
let score2 = "99" /** this is a string  */

// lets check the typeOf

console.log(typeof score1); /** we can see the result is number  */
console.log(typeof score2); /** we can see the result is string  */

// but lets us assume that we want score2 as a number
// so in this type of case the conversion method plays a significant role.

const valueInNumber =  Number(score2) /** using the number method we can print in number only by default. */
console.log(typeof valueInNumber)
console.log(valueInNumber)

// so what type of conversion are possible and what will be the result of the conversion.

// "33" => 33
// "33abc"=> NaN
// true => 1
// false => 0

// now lets convert 1 into boolean

let isLoggedIn = 1

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

// 1 => true; 0 => false
// ""=> false ; "added value" => false.

// the more we practice the more better we will understand . because mostly the return value is in string so according to the requirement we will have to convert it to our desired values.

// ###############################################################################################################################


// dataTypes from interview perspective.

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them


// all the dataTypes are divided into two types 1. primitive & 2. non-primitive
// and this division is based on the type in which the data is kept in the database and when it need we again call for it or access it .


// primitive - 7 types , this is a type of data type ,where we donot get the original data we get the copy of it .
// 1. string , 2. Number 3. Boolean , 4. Null (it means empty not 0) , 5. undefined , 6. Symbols (to make any specific value unique we use symbols.) , 7. BigInt 

// non primitive ;- this is also known as reference data type. if we make any changes we make in the original variable .
// 1. Array , 2. Objects , 3. Functions

// stack and heap notes is in the copy . page no. april4.

// stack example :-

let Name = "jimmy"; /** here we have declared a name variable */
let newNAme = Name; /** here we created another variable and assign the name variable to it .  */

// now according to the theory if we make any changes in the newName will it change in the Name variable.
 
newNAme = "Luit";
// and according to the theory name and newName are now to different variables and what ever changes we have made . it is in the copy of the main variable not in the original one 

console.log(Name);
console.log(newNAme);

// as we can see the second variable is modified without changing the original variable . this is the basic understanding of the stack memory

// Heap memory example :-

  const details = {
    name: "Luit",
    age: 24
  }

  let details2 = details /** here we have created a new variable but given reference of the older variable.  */

  details.name = "jimmy" /** as we can see with this line of code . even the original data is also changed both details2 and details give the same value after change.  */

  console.log(details)
  console.log(details2)

  // ##################################################################################################################

  
// OPPS
// explain the 4 pillers of OOPS Abstraction, Encapsulation , inheritance, polymorphism explain nicely with simple words and good example two for each

// 1. Abstraction
// Definition: Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object.

// Examples:

// Example 1: Consider a TV remote. When you press the power button, the TV turns on. You don't need to know how the circuits inside the remote and TV work. The complexity is hidden, and you only interact with the buttons.
// Example 2: Think of a car. When you drive, you use the steering wheel, pedals, and gear stick. You don't need to understand the inner workings of the engine or the electronics; you just use the interface provided to control the car.


// 2. Encapsulation
// Definition: Encapsulation is the concept of wrapping the data (variables) and code (methods) together as a single unit. It also involves restricting access to some of the object's components, which means the internal representation of an object is hidden from the outside.

// Example 1: In a bank account class, the balance is private. You can access it only through methods like deposit() and withdraw(). This prevents unauthorized access and modification of the balance directly.
// Example 2: Consider a student record. The student's grades are private. They can only be accessed or modified through methods like get_grades() or set_grades().


// 3. Inheritance
// Definition: Inheritance is the concept where one class (child class) inherits the properties and behaviors (methods) from another class (parent class).

// Examples:

// Example 1: A parent class Animal has methods like eat() and sleep(). A child class Dog inherits these methods and can also have additional methods like bark().
// Example 2: A parent class Vehicle has methods like start() and stop(). A child class Car inherits these methods and can have additional methods like play_music().


// 4. Polymorphism
// Definition: Polymorphism is the concept where a single function or method behaves differently based on the object that calls it.

// Examples:

// Example 1: Consider a function make_sound(). It behaves differently when called on objects of different classes like Dog or Cat.

// python code 
// class Dog:
//     def make_sound(self):
//         print("Bark")

// class Cat:
//     def make_sound(self):
//         print("Meow")

// def animal_sound(animal):
//     animal.make_sound()

// dog = Dog()
// cat = Cat()

// animal_sound(dog) # Outputs: Bark
// animal_sound(cat) # Outputs: Meow


