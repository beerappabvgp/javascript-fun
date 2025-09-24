let numbers = [1,2,3,4,5]

// map, filter
// [2, 4, 6, 8, 10]


let multiplesOfTwo = []        

// traverse the entire array and multiply each element by two 
// store the updated value in the new array


for(let i = 0; i < numbers.length; i++) {
    multiplesOfTwo.push(numbers[i] * 2)
}

// console.log(multiplesOfTwo)



// second way 
// [1,2,3,4]
let multiplyByTwo = (num) => {
    return num * 2
}
let multiples = numbers.map(multiplyByTwo)

console.log(multiples)

// multiplyByTwo(1)   => 2
// multiplyByTwo(2)  => 4
// multiplyByTwo(3)  => 6
//multiplyByTwo(4)  => 8     



// filter 
// [1,2,3,4,5]


// traversal method 

let even = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        even.push(numbers[i])
    }
}

console.log("even numbers: ", even)


let nums = []

nums.push(100000)
nums.push(20000000000)
console.log("after pushing an element to the array : ", nums)


// filter 

let filterEvenNumbers = (num) => {
    if (num % 2 == 0) {
        return true
    }
}
let evenNumbers = numbers.filter(filterEvenNumbers)
// [1,2,3,4]
// filterEvenNumbers(1)
// filterEvenNumbers(2)
// filterEvenNumbers(3)
// filterEvenNumbers(4)

console.log(evenNumbers)