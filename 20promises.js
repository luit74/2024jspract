// in promises there are three stages 
// 1. pending , 2. fullfilled or resolved , 3. rejected
// (resolve, reject) - this is called the executor function , in which it is mendetory to pass two arguments that is resolve and reject 
// if we complete the promise we will use resolve & if we have failed we will use reject function.

// resolveFunc(value) // call on fulfilled
// rejectFunc(reason) // call on rejected


// this is producing of promise
const Obj1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no) /**   */
        reject("error while communicating")
    }, 2000);

});

const getBioData = (indexData) => {
    return new promise((resolve, reject) => {
        setTimeout((indexData) => {
            let bioData = {
                name: "luit",
                age: 24,
                gender: "male"
            }
            resolve(`my roll number is ${roll_no} and my name is ${bioData.name}`)
        }, 2000, indexData)
    })
}

// this is consume of promise. 

pObj1.then((roll_no) => { /** we will then only when it is resolved .  */
    // console.log(roll_no);
    getBioData(roll_no[1]).then((kuchBhi) => {
        // console.log(kuchBhi);
    })

}).catch((error) => {
    // console.log(error)
})

// the method promise.then() , promise.catch() and promise.finally() are used to associate further action with a promise that becomes settled

// #############################################################################################################################

const promiseOne = new Promise((resolve, reject) => {
    // do an async task
    // DB calls , cryptography , network 
    setTimeout(function () {
        console.log("async task completed");
        resolve() /** after using this line of code then only we will be able to connect the consumed promise that is .then()  */
    }, 1000)
})

// whatever value is produced from setTimeout .console.log("promise consumed") we get returned in the .then()
promiseOne.then(() => {
    console.log("promise consumed") /** this line will never get print before the above console because after resolve() completed then only this line will be completed */
})

// ##########################################################################################

// using promise without storing it in a variable 

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task two")
        resolve()
    }, 1000)
    // in the below line we can see that we have used .then() directly because we have not store it in any variable.
}).then(() => {
    console.log("ayscn 2 resolved")
})

// ##############################################################################################################

// here we have inject an object directly and consuming is to the output.

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Luit74", age: 24, gender: "male" }) /** whatever value we pass through resolve() we can return it in .then() and stored as a variable.  */
    }, 1000)
})
    
promiseThree.then((user) => { /** in this line we have used user as a variable to store the returned data comming from  */
    console.log(user)
})

// ################################################################################################################

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false /** depending on this true and false we will see different result in  the console. */
        if (!error) {
            resolve({ username: "Luit74", password: "123" })
        }
        else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        console.log(error)
        // in the below we use finally in many cases we will use finally 
        // this will always run . its main work is to say that jo bhi hona tha wo ho gaya ki nehi .
    }).finally(() => {
        console.log("the promise is either reject or resolve . ")
    })

// ######################################################################################################################

const promiseFive = new Promise((resolve, reject) => {
    setInterval(() => {
        let error = true /** depending on this true and false we will see different result in  the console. */
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        }
        else {
            reject("ERROR: JS went wrong")
        }

    }, 1000)
});

// lets try a different approach to consume a promise .
// this async function is used to consume a promise 


async function consumePromiseFive() {
    try {
        const response = await promiseFive /** await is used to wait for few minutes because it is a request so it will take time. */
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
// we have to call for the function then only we will be able to see the executed codes. 