const fs = require("fs")

class MessageServices {
    getMessages() {
        return new Promise((res, rej) => {
            fs.readFile("message.json", "utf8", (err, data) => {
                if (err) throw err;
                res(JSON.parse(data))
            })
        })
    }
}

module.exports = new MessageServices();