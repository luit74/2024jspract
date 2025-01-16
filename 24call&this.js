function setName(username){
    this.username = username /** step3. we will not use this .this method when we call the username because everytime after the execution this username will wipe out because after the execution of the fucntion , it goes out of the execution context and everything gets wiped out.  */
    console.log("setName is called")
}

function createUser(username, password, gender){
    setName.call(this ,username) /**step2 . we add .call so that after the setName execute it holds the value . step3. so we will use this in the username which will help us to store the setName data into this .this so that it can be called.   */
    // this.username = username we have outsource this line from setName func . 
    this.password = password
    this.gender = gender
}   

const chai = new createUser("luit",123,"male")

console.log(chai) /** step1 . (without using call) as we can see when we run this we are able to print everything except username but we can also see that setName function is running . it is not able to access the data.*/

// this is because when setName is called after the execution . the set goes out of the execution context and all the data stored in the setName it also get wiped out. thats why we are not able to access it