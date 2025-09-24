let first = () => {
    second()
    console.log("first")
}

let second = () => { 
    third()
    console.log("second")  
}

let third = () => { 
    fourth()
    console.log("third")  
}

let fourth = () => {
    console.log("fourth")   
}


let main = () => {
    first()
}

main()  

// when you call a function it will be pushed into the callstack
// when the function execution is completed it will be popped off 
// from the callstack