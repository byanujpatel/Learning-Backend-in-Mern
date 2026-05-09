const mongoose = require("mongoose")

// Connection URL for MongoDB
const mongoURL = "mongodb://localhost:27017/hotels"

mongoose.connect(mongoURL)

const db = mongoose.connection

// EVent listener

db.on('connected', () => {
    console.log("Connected to MongoDB Server")
})


db.on('error', (error) => {
    console.log("Error in MongoDB Server Connection", error)
})


db.on('disconnected', () => {
    console.log("MongoDB Server Disconnected")
})

module.exports = db