let          main = () => {
    console.log("start of promises .... ")
    // create a promise 
    let executor = (resolve, reject) => {
        let success = true
        if (success == true) {
            resolve("Data is ready .... ")
        } else {
            reject("I could not keep up the promise  .....")
        }
    }
    let log = () => {
        console.log("After timeout ..... ")
    }
    // Promise constructor takes a callback function as an argument
    setTimeout(log,2000)
    let promise = new Promise(executor)
    console.log("promise object is: ", promise)

    // handling the promises states 
    let handleSuccess = (result) => {
        console.log("promise result is: ", result)
    }
// handleSuccess("data ......")
    let handleFailure = (err) => {
        console.log("err is:", err)
    }
    promise
    .then(handleSuccess)
    .catch(handleFailure)
}  
main()