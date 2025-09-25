let asyncTask = async () => {
    // let data = ["Dheeraj", "Abhishek", "Vishnu", "Dinesh"]
    // let data  = "Tahir"
    // let data = "Shilpa"
    return data;
}

let main = async () => {
    console.log("start of the program .....")
    let response = await asyncTask()
    console.log("response is: ", response) 
}

main()

console.log("end of the program ============")