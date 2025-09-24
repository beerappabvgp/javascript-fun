// person information 

// creating the information 
let person = {
    username: "Anil",
    contact: 7993873246,
    age: 23,
    email: "anil@gmail.com"
}

// CRUD 

// reading the information 
console.log(person.age)
console.log(person.email)


// update the existing information

person.age = 10000
person.username = "bharath"
person.email = "bharath@gmail.com"
console.log(person)


// deleteting the information 

delete person.age
console.log("After deleting the age: ",  person)

delete person.contact
console.log("after deleting the contact : ", person)  