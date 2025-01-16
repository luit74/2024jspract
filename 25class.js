// whatever we have used is after ES6
// thats why we are getting this syntactical sugar

class User {
    constructor(username, email, password) { /** as soon as the new keyword is initialized the constructor is called */
        this.username = username
        this.email = email
        this.password = password
    }
    // these are nothing but methods. declared inside the class. 
    encryptPassword() { /** and inside the class scope only we declared new methods() */
        return `${this.password}abc`
    }
    changeUserName() { /** this way we can add multiple methods to the class . */
        return `${this.username.toUpperCase()}`
    }
    // this is how we can add multiple methods to the class . by making our own methods and calling it whenever we need it .
}

const chai = new User("luit74", "luit@gmail.com", "123")

console.log(chai.encryptPassword())
console.log(chai.changeUserName())

// ##################################################################################################################

// this is the behind the scenes

// suppose if we donot use class and constructor then we would have to write the code like this.

function User2(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = () => {
    return `${this.password}abc`
}

User2.prototype.changeUserName = () => {
    return `${this.username.toUpperCase()}`
}



const tea = new User2("tea", "tea@gmail.com", 543)

console.log(tea.encryptPassword());
console.log(tea.changeUserName());
// this section of code doesnot run , it always suggest us to convert it into ES6 to execute the code.
// ##################################################################################################################

// let us create another class to understand inheritance and the prototypal behavior

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`The username is${this.username}`)
    }
}

// this extends and super is actually a keyword which is present in js
// the extends is used to point out that this child class has a parent . in our case teacher is the child class of the User3 parent class
class teacher extends User {
    constructor(username, email, password) {

        super(username) /** because of the super function we will not use any this or call to inherit the username like we used to do earlier . we can direcly inhert from the parent class. */
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`a new course was added : ${this.username} `);
    }
}

// this line of code is called as the object.
const newTeacher = new teacher("Luit","luit@gmail.com",543)

const newUser = new User("Jimmy", "jimmy@gmail.com",123)

console.log(newTeacher.addCourse())
console.log(newTeacher.logMe())

// console.log(newUser.addCourse()) /** user is the parent and teacher is the child and we know that parent cannot access the child but child can . thats why we are not being able to run this line of code . because addCourse() is a method stored in teacher which is a child. */
console.log(newUser.logMe())

console.log(newUser instanceof newTeacher)


// ######################################################################################################

class User5 {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`)
    }
    // let  us assume that we are creating random ID for each individual user . but for now it is hard coded 123
    static createId() {
        return 123
        // this is an object . if we give access of user5 to a child class then all the child class can get access to its methods . Therefore lets say we donot want to give access of the createId to the child class because it contains important details i.e ID
    }
}

const luit = new User5("Luit")
console.log(luit.createId()); /** as we can see id is getting printed .  */
// and we can see that after using static when we console.log there is an error . otherwise earlier without static there was no error in it . 