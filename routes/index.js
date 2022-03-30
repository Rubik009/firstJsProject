const express = require("express");
const router = express.Router();
const peopleRoutes = require("./people")
const messageRoutes = require("./message")

router.use("/people", peopleRoutes);
router.use("/message", messageRoutes);

module.exports = router;