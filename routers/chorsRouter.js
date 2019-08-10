 const express = require("express");
 const router = express =express.Router();

 
 router.get("/", (req, res) => {
     res.status(200).json(chores)
 });

