// JSON Stringify and Parse
/*

const object1 = { "name": "anuj", "city": "Hannover" }
const jsonString = JSON.stringify(object1)

const jsonObject = JSON.parse(jsonString)
console.log(jsonString, typeof jsonString)
console.log(jsonObject, typeof jsonObject)

*/

const express = require("express")
const app = express()
const db = require("./db")
const bodyParser = require("body-parser")
const Person = require("./models/Person")
const MenuItem = require("./models/Menu")

app.use(bodyParser.json()) // Middleware to parse JSON data

app.get("/", (req, res) => {
    console.log("Hello World")
    res.send("Welcome to our API Server,How can i Help YOU?")
})

app.post("/person", async (req, res) => {
    try {
        const data = req.body // assuming the req body contains the person data
        console.log(data, "DATA")
        // Create a new Person document and save it to the database
        const newPerson = new Person(data);
        // Save the new person to the database
        const response = await newPerson.save()
        console.log("Person record is saved ", response)
        res.status(200).json(response)
    }
    catch (error) {
        console.log("Error due to invalid data ", error)
        res.status(500).json({ error: "Internal server error" })
    }

})


app.get("/person", async (req, res) => {
    try {
        const data = await Person.find()
        console.log("Data fetched successfully")
        res.status(200).json(data)

    }
    catch (err) {
        console.log("Error while fetching from the DB")
        res.status(500).json({ error: "Internal server error" })
    }
})

app.post("/menu", async (req, res) => {
    try {

    } catch (err) { }
})
// app.get("/paneer", (req, res) => {
//     res.send("Paneer Chilli is Available in 200rs !!")
//     console.log("Request Recieved of Paneer")
// })

// app.get("/idli", (req, res) => {
//     let customized_idli = {
//         name: "ragi idli",
//         size: '10cm diameter',
//         is_sambhar: true,
//         is_chutney: false
//     }
//     console.log("Idli Request Recieved")
//     res.send(customized_idli)
// })

// app.post("/items", (req, res) => {
//     console.log("Data is saved ...")
//     res.send("Data is saved in the DB")
// })

app.listen(3000, () => {
    console.log("Server is now running at 3000")
})