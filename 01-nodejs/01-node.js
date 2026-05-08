let a1 = 10
let a2 = 20

console.log(a1 + a2)

let total = a1 + a2

console.log(total)

let s1 = '10'
let s2 = '23'

console.log(parseInt(s1) + parseInt(s2))
console.log(s1 + s2)


console.log("Hello World " + total)
console.log(typeof total)
console.log(typeof s1)
console.log(typeof s2)

// Array

const cars = ["BMW", "Volvo", "Saab", "Ford"];
console.log(cars)
console.log(typeof cars)

cars.push('Tesla')

console.log(cars)
console.log(cars[1])
console.log(cars.length)

const hour = 16

if (hour < 16) {
    console.log("Good Morning")
} else {
    console.log("Good Afternoon")
}

let count = 10

for (let i = 1; i <= count; i++) {
    console.log(i)
}

// Objects

const student = {
    name: "John",
    age: 30,
    city: "Greater Noida"
}
console.log(student)
console.log(typeof student)

console.log(student['city'])
console.log(student.age)

// function

const ages = [30, 31, 32, 33, 34, 35]
console.log(ages)
console.log(typeof ages)


const result = ages.filter(checkAge)

function checkAge(age){
    return age>=32
}

console.log(result)

// User se Input lena kaisa hai