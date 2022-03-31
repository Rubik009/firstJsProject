const fs = require("fs")

function Message(messageTitle, messageId) {
    this.messageTitle = messageTitle;
    this.messageId = messageId;
}

let message1 = new Message('hello', 1);
let message2 = new Message('good morning', 2);
let messages = []
messages.push(message1, message2);

class MessageServices {
    getMessages() {
        return new Promise((res, rej) => {
            fs.readFile("message.json", "utf8", (err, data) => {
                if (err) throw err;
                res(JSON.parse(data))
            })
        })
    }
    getMessagesById(id) {
        return new Promise((res, rej) => {
            res(messages.find(item => item.messageId == id))
        })
    }
}

module.exports = new MessageServices();