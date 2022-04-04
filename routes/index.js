const express = require("express");
const router = express.Router();
const peopleRoutes = require("./people")
const messageRoutes = require("./message")
const userRoutes = require("./user")

router.use("/people", peopleRoutes);
router.use("/message", messageRoutes);
router.use("/user", userRoutes);

module.exports = router;