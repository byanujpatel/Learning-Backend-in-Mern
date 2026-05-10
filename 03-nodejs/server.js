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
require('dotenv').config()
const bodyParser = require("body-parser")
const Person = require("./models/Person")
const MenuItem = require("./models/Menu")

app.use(bodyParser.json()) // Middleware to parse JSON data

app.get("/", (req, res) => {
    res.send("Welcome to our Hotel API Server,How can I Help YOU?")
})

// Import the Routes files
const personRoutes = require("./routes/personRoutes")
const menuRoutes = require("./routes/menuRoutes")

// Use the router
app.use("/person", personRoutes)
app.use("/menu", menuRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is now running at 3000")
})

