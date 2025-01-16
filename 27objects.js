// mathpi this is an interview question . 
console.log(Math.PI * 2)

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

// console.log(descriptor)
// as we can be writable , enumerable and configurable are all set to false , it is hard coded to false and cannot be changed that is why the PI value is constant . 

// therefore we can also set our properties like this . and make it constant 

// let see another object to understand it better.

const details = {
    name: "Luit",
    age: 24,
    gender: "male"
}

// const descriptor2 = Object.getOwnPropertyDescriptor(details, "name"); /** inside details we have to check the name property */
// console.log(descriptor2)
// as we can see the writable value and everything are set to true . so we can change the value . But if we set it to false then we won't be able to make any modifications to it . 

// in this step we will define the properties according to our wish .
// where we can fix it to constant . 
// though it is not suggested to make any property constant 

Object.defineProperty(details, "name", {
    writable: false,
    enumerable: false
})

const descriptor2 = Object.getOwnPropertyDescriptor(details, "name"); /** inside details we have to check the name property */
console.log(descriptor2)

