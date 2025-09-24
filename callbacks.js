let add = (num1, num2) => {
    return num1 + num2
}

let sub = (num1, num2) => {
    return num1 - num2
}

let mul = (num1, num2) => {
    return num1 * num2
}

let div = (num1, num2) => {
    return num1 / num2
}

let calculator = (fn, num1, num2, sign) => {
    let res = fn(num1, num2) // add(2,4) -> 6   
    if (sign == "+") {
        console.log("Addition res: ", res)
    } else if(sign == "-") {
        console.log("subtraction res is: ", res)
    } else if(sign == "*") {
        console.log("multiplication res is: ", res)
    } else if(sign == "/") {
        console.log("Division res is: ", res)
    } else {
        console.log("Invalid sign")
    }
}
          
// calculator(add, 2, 4, "+")    
// calculator(sub, 100, 50, "-")  
calculator(mul, 100, 20, "*")
// calculator(div, 100, 5, "/")
// calculator(div, 2, 3, "**") 