function Message(messageTitle, messageId) {
    this.messageTitle = messageTitle;
    this.messageId = messageId;
}

let message1 = new Message('hello', 1);
let message2 = new Message('good morning', 2);
let messages = []
messages.push(message1, message2);

class MessageControllers {
    getMessages(){
        return messages;
    }
    getMessageById(id){
        const messageById = messages.find(item => item.messageId == id);
        return messageById
    }
}

module.exports = new MessageControllers();