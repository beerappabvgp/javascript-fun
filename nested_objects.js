let person = {
    username: "Ganesha",
    contact: 7993873246,
    age: 2300000000000000000000000000000000,
    email: "ganesha@gmail.com",
    address: {
        houseNumber: "6-9",
        street: "XYZ street",
        place: "place name",
        pincode: 517408,
        state: "AP",
        country: "IND"
    }
}


console.log(person.address.pincode)
console.log(person.address.country)

delete person.address.place

console.log("person after deleting the place: ", person)


// updating the house number 


person.address.houseNumber = "89-98"
console.log("person after updating the address (houseNumber): ", person)