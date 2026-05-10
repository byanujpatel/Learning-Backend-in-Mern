const express = require("express")
const Person = require("../models/Person")
const router = express.Router()


router.post("/", async (req, res) => {
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


router.get("/", async (req, res) => {
    try {
        const data = await Person.find()
        console.log("Data fetched successfully")
        res.status(200).json(data)

    }
    catch (err) {
        console.log("Error while fetching from the DB", err)
        res.status(500).json({ error: "Internal server error" })
    }
})

router.get("/:workType", async (req, res) => {
    try {
        const workType = req.params.workType
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType })
            console.log("Data is fetched successfully")
            res.status(200).json(response)
        }
        else {
            res.status(404).json({ error: "Invalid work Type" })
        }
    }
    catch (err) {
        console.log("Error while fetching from the DB")
        res.status(500).json({ error: "Internal server error" })
    }

})

router.put("/:id", async (req, res) => {
    try {
        const personId = req.params.id   // extract id from params
        const updatedPersonData = req.body //updated body
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            returnDocument: "after",
            runValidators: true
        })

        if (!response) {
            return res.status(404).json({ error: "Person not found" })
        }
        console.log("Person data updated successfully")
        res.status(200).json(response)
    }
    catch (err) {
        console.log("Error while updating the DB", err)
        res.status(500).json({ error: "Internal server error" })
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const personId = req.params.id
        const response = await Person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: "Person not found" })
        }
        console.log("Person data deleted successfully")
        res.status(200).json(response)
    } catch (err) {
        console.log("Error while deleting from the DB", err)
        res.status(500).json({ error: "Internal server error" })
    }
})


module.exports = router
