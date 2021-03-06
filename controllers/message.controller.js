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
    async addMessage (body){
        let answer = await MessageServices.addMessage(body);
        return answer;
    }
    async editMessage(id, body) {
        let answer = await MessageServices.editMessage(id, body);
        return answer;
    }
    async deleteMessage(id){
        let answer = await MessageServices.deleteMessage(id);
        return answer;
    }
}

module.exports = new MessageControllers();