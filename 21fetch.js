fetch("https://api.github.com/users/hiteshchoudhary") /** fetch is used for the links , because it is a network based request. */
    .then((infom) => { /** the data that return from the API call is assumed to infom , this is a variable  name and it can be anything  */
        console.log(infom)
        return infom.json() /** after consoling the API data then we will return it so that it can be store and convert it into a JSON data type  */

    }).then((data) => {  /** here the data which we convert into a json , then assuming with a variable name that is data and consoling this out. */
        console.log(data.login)

    })
    .catch((error) => console.log(error))

    // interview - to promise we have requested and from there is an error code 404. So , we will get the promise as resolve or reject ?
    // =>> we will get this as resolve only becuase it is not an error . we will get error only when the browser is not able do the request.