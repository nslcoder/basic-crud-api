const express = require("express");
const router = express.Router();
/* const Posts = require("../models/Posts"); */

router.post("/", (req, res) => {
    console.log(req.body);
})

module.exports = router;