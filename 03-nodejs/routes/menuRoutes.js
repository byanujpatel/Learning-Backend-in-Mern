const express = require("express")
const MenuItem = require("../models/Menu")
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const data = req.body
        console.log(data, 'DATA')
        // Create a new MenuItem Document
        const menuItem = new MenuItem(data)
        // Save the MenuItem to the Database
        const response = await menuItem.save()
        console.log("Menu Item Record is saved ", response)
        res.status(200).json(response)
    } catch (err) {
        console.log("Error while saving menu item ", err)
        res.status(500).json({ error: "Internal server error" })
    }
})

router.get("/", async (req, res) => {
    try {
        const data = await MenuItem.find()
        console.log("Data fetched successfully")
        res.status(200).json(data)
    } catch (err) {
        console.log("Error while fetching from the DB", err)
        res.status(500).json({ error: "Internal server error" })
    }
})

router.get("/:taste", async (req, res) => {
    try {
        const tasteType = req.params.taste
        if (tasteType == 'spicy' || tasteType == 'sweet' || tasteType == 'sour') {
            const response = await MenuItem.find({ taste: tasteType })
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

// Comment added for the commit
module.exports = router