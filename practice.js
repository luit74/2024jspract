const promiseA = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({
                "username": "Luit74",
                "password": "Dogood#543"
            })
        }else{
            reject("ERROR something went wrong haha")
        }
    },1000)
})

promiseA.then((user)=>{
    // console.log(user);
    return user.username  
}).then((username)=>{
    console.log(username);
    
})
.catch((error)=> {
    console.log(error);
    
}).finally(()=>{
    console.log("the promise is either consumed or rejected");
    
})