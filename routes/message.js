const express = require("express");
const MessageControllers = require("../controllers/message.controller");
const router = express.Router();


router.get("/", (req, res) => {
    try {
        const messages = MessageControllers.getMessages();
        res.send(messages)
    } catch (err) {
        console.log(err)
    }
});
router.get("/messageById/:id", (req, res) => {
    try {
        const messageById = MessageControllers.getMessageById(req.params.id)
        res.send(messageById)
    } catch (err) {
        console.log(err)
    }
})
router.post("/create")
router.put("/edit")
router.delete("/delete")

module.exports = router;