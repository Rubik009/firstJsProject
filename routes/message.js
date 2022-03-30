const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

function Message(messageCode, messageId) {
    this.messageCode = messageCode;
    this.messageId = messageId;
}

let message1 = new Message('hello', 1)
let message2 = new Message('good morning', 2)
let message = []
message.push(message1, message2);

router.get("/", (req, res) => res.send(message));
router.get("/:id", (req, res)=> {
    const messageById = message.find(item => item.messageId == req.params.id).messageCode
    res.send(messageById)
})
router.post("/create")
router.put("/edit")
router.delete("/delete")

module.exports = router;