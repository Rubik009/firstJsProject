const MessageServices = require("../services/message.services")

class MessageControllers {
    async getMessages(){
        let messages = await MessageServices.getMessages();
        return messages;
    }
    async getMessageById(id){
        let messageById = await MessageServices.getMessagesById(id);
        return messageById;
    }
}

module.exports = new MessageControllers();