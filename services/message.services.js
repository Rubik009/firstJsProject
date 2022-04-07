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
                if(data.length == 0){
                    res('no Messages');
                }else{
                    res(JSON.parse(data))
                }
            })
        })
    }
    getMessagesById(id) {
        return new Promise((res, rej) => {
            fs.readFile("message.json", "utf8", (err, data) => {
                if (err) throw err;
                if(data.length == 0){
                    res('no Messages')
                }else{
                    let arrMessage = JSON.parse(data);
                    let message = arrMessage.find(item => item.id == id);
                    res(message);
                }
            })
        })
    }
    addMessage(body) {
        return new Promise((res, rej) => {
            fs.readFile("message.json", "utf8", (err, data) => {
                if (err) throw err;
                if(data.length == 0){ 
                    let arrMessage = [];
                    arrMessage.push(body)
                    fs.writeFile("message.json", JSON.stringify(arrMessage), (err) => {
                        if (err) throw err;
                    })
                    res('Message added')
                }else{
                    let arrMessage = JSON.parse(data);
                    arrMessage.push(body);
    
                    fs.writeFile("message.json", JSON.stringify(arrMessage), (err) => {
                        if (err) throw err;
                    })
                    res('Message added')
                } 
            })
        })
    }
    editMessage(id, body) {
        return new Promise((res, rej) => {
            fs.readFile("message.json", "utf8", (err, data) => {
                if (err) throw err;
                if(data.length === 0){
                    res('no Messages')
                }else{
                    let arrMessage = JSON.parse(data);
                arrMessage.find((item, index) => {
                    if (id == item.id) {
                        arrMessage[index] = body;
                    }
                });
                fs.writeFile("message.json", JSON.stringify(arrMessage), (err) => {
                    if (err) throw err;
                })
                res('Message edited')
                }
            })
        })
    }
    deleteMessage(id) {
        return new Promise((res, rej) => {
            fs.readFile("message.json", "utf8", (err, data) => {
                if (err) throw err;
                if(data.length === 0){
                    res('no messages to delete')
                }else {
                    let arrMessage = JSON.parse(data);
                    let index = arrMessage.findIndex(item => item.id == id);
                    arrMessage.splice(index, 1)
    
                    fs.writeFile("message.json", JSON.stringify(arrMessage), (err) => {
                        if (err) throw err;
                    })
                    res('Message deleted');
                }
            })
        })
    }
}

module.exports = new MessageServices();