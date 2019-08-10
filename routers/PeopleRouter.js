
const express = require("express");
const db = [
    { id:1, name: "Jarred"},
    { id:2, name: "Ethan"},
    { id:3, name: "craig"},
    
];

const router = express.Router();
router.get("/", (req, res) => {
    db;
    res.status(200).json(db);
});

module.exports = router;