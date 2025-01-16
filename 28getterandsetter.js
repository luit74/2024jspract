// 1. with the get & set keywords we define the getter and setter 
// 2. and if we define the getter then we will also have to define the setter , otherwise we will get an error. we connot just define getter and leave it . 


// get means 


class User{
    constructor (email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value /** we never return setters but we do in getters  */
        // putting a _ in the email or password is the standart practice to create a new property . 
    }

    // 4. while getting the property we will have to use the exact name to get the property.

    // by using getter and setter we can customise the property of the class.
    get password(){ /** this is how we define getter */
        return this._password.toUpperCase() /** in this case suppose we get our password and want to change it to , in upper case  */
        // with get we get the property or select the property of an Object.
    }
    set password(value){ /** as this is a setter so we will always have to set a value , whether it be a string or a number . instead of value we can give anything . but for better understanding we are using value only. ,  */
        this._password = value
    }
}


// 1. suppose sometimes we want to add something with the password . for eg encrypted password or anything like that , for that we will use getter . in the above line , that is how we define getter.  
// 2.  getter helps us to get the value . 
// 3. if we want to get some value outside from the class , we will use getter to get the value .
const luit = new User("luit@gmail.com","abc")
console.log(luit)
console.log(luit.email)
console.log(luit.password)

// ##########################################################################################################################

// old style of getter and setters 
// but this code will not run because it is not in ES6 style.
// this is function based getters and setters

function User1 (email1, password1){
    this.email1 = email1;
    this.password1 = password1

    // this is used to define the context.
    Object.defineProperty(this, "email", {
        get: function(){
            return this._email1.toUpperCase()
        },
        set: function(value){
            this.email1 = value
        }
    })
}

const Jimmy =  new User1("jimmy@gmail.com", "abc")

console.log(Jimmy.email)

// #####################################################################################################################

// this is object based getters and setters
// both are correct , whichever syntax we like we can use it .

const User3 = {
    _email3 : "Johny@gmail.com",
    _password3: "abc",

    get email3(){
        return this._email3.toUpperCase();
    },
    set email(value){
        this._email3 = value;
    }
}

// this is a very old style of using getters and setters 
// now a days the class constructor are used to get and set the value . =