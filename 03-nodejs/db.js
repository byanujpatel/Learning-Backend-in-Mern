const mongoose = require("mongoose")
require('dotenv').config()
// Connection URL for MongoDB
// const mongoURL = "mongodb://localhost:27017/hotels"
// const DB_LOCAL = process.env.DB_LOCAL
const DB_URL = process.env.DB_URL 
const mongoURL = DB_URL

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