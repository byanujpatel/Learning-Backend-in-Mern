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

app.get("/", (req, res) => {
    console.log("Hello World")
    res.send("Welcome to our API Server,How can i Help YOU?")
})

app.get("/paneer", (req, res) => {
    res.send("Paneer Chilli is Available in 200rs !!")
    console.log("Request Recieved of Paneer")
})

app.get("/idli", (req, res) => {
    let customized_idli = {
        name: "ragi idli",
        size: '10cm diameter',
        is_sambhar: true,
        is_chutney: false
    }
    console.log("Idli Request Recieved")
    res.send(customized_idli)
})

app.post("/items", (req, res) => {
    console.log("Data is saved ...")
    res.send("Data is saved in the DB")
})

app.listen(3000, () => {
    console.log("Server is now running at 3000")
})