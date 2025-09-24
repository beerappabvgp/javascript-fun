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
    },
    printPersonDetails: () => {
        console.log("Name of the person: ", person.username)
    },
    add: function (num1, num2) {
        console.log("addition result is : ", num1 + num2)
    }
}

person.printPersonDetails()
person.add(2,3)  