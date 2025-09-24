let main = () => {
    console.log("start of the program =============")

let log  = () => {
    console.log("After timer ran out .... ")
}

let log2  = () => {
    console.log("After timer ran out 0ms .... ")
}
    
setTimeout(log, 2000)   
setTimeout(log2, 0)
          
console.log("End of the program  ... ")
}
main()  
// 2 9 15 5

let add = (num1, num2) => {return num1 + num2}  // function definition

add(2, 3) // function call            b