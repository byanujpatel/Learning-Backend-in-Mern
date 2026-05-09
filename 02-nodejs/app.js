console.log("Server App file is running...");

// CallBack Function 

// Way 1 : Normal Function 
function add(a, b) {
    return a + b
}

const result = add(1000, 23.5)
// console.log(result)

// Way 2 :

let multiply = function (a, b) {
    return a * b
}

const result2 = multiply(100, 23.5)
// console.log(result2)

// Way 3 : Arrow Function

let divide = (a, b) => a / b


const result3 = divide(30, 2)
// console.log(result3)

let substract = (a, b) => {
    return a - b
};

const result4 = substract(10, 4)
// console.log(result4)


// a; this is variable
// a() this is function




const notes = require("./notes")
console.log(notes)

let age = notes.age
console.log(age)

let addNumbers = notes.addNumber(age+100,20)
console.log("Result",addNumbers)

console.log("End of Server")

