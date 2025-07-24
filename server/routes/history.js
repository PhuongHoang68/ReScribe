//routes/history.js
const express = require('express')
const router = express.Router()
const Output = require("../models/Output");

router.get("/", async(req, res) => {
    try {
        const results = await Output.find().sort({createdAt: -1});
        res.json(results);
    } catch (err) {
        res.status(500).json({error: "Failed to fetch history"});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const result = await Output.findById(req.params.id);
        if (!result) {
            return res.status(404).json({error: "Not found"})
        }
        res.json(result)
    } catch (err) {
        res.status(500).json({error: "Failed to fetch item"})
    }
})

module.exports = router;
