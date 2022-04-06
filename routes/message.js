const express = require("express");
const MessageControllers = require("../controllers/message.controller");
const router = express.Router();

/**
 * @swagger
 * /api/message:
 *  get:
 *      description: Use a request to get list of messages
 *      tags:
 *          - Message
 *      responses:
 *          '200':
 *              description: A succesful response
 */ 
router.get("/", async (req, res) => {
    try {
        const messages = await MessageControllers.getMessages();
        res.send(messages)
    } catch (err) {
        console.log(err)
    }
});
/**
 * @swagger
 * /api/message/messageById/{id}:
 *  get:
 *      description: Use a request to get message by id
 *      tags:
 *        - Message
 *      parameters:
 *        - in: path
 *          name: id
 *          requered: true
 *          scheme: 
 *              type: integer
 *      responses:
 *          '200':
 *              description: A succesful response
 */ 
router.get("/messageById/:id", async (req, res) => {
    try {
        const messageById = await MessageControllers.getMessageById(req.params.id)
        res.send(messageById)
    } catch (err) {
        console.log(err)
    }
});
/**
 * @swagger
 * /api/message/addMessage:
 *  post:
 *      description: Add message to list
 *      tags:
 *        - Message
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Message
 *          required: true
 *          description: Add object with properties
 *          schema:
 *              $ref: '#/definitions/Message'
 *      responses:
 *          '200':
 *              description: A succesful response
 * definitions:
 *  Message:
 *      type: object
 *      required:
 *          - id
 *          - name
 *          - pages
 *          - year
 *      properties:
 *          id: 
 *              type: integer
 *          name: 
 *              type: string
 *          pages: 
 *              type: integer
 *          year: 
 *              type: integer
 */ 
router.post("/addMessage", async (req, res) => {
    try {
        const answer = await MessageControllers.addMessage(req.body)
        res.send(answer)
    } catch (err) {
        console.log(err)
    }
});
/**
 * @swagger
 * /api/message/editMessage/{id}:
 *  put:
 *      description: Change message in the list by id
 *      tags:
 *        - Message
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: write id message need to change
 *          type: integer
 *        - in: body
 *          name: Message
 *          required: true
 *          description: Object to change 
 *          schema:
 *              $ref: '#/definitions/Message'
 *      responses:
 *          '200':
 *              description: A succesful response
 * definitions:
 *  Message:
 *      type: object
 *      required:
 *          - id
 *          - name
 *          - pages
 *          - year
 *      properties:
 *          id: 
 *              type: integer
 *          name: 
 *              type: string
 *          pages: 
 *              type: integer
 *          year: 
 *              type: integer
 */ 
router.put("/editMessage/:id", async (req, res) => {
    try {
        const answer = await MessageControllers.editMessage(req.params.id, req.body)
        res.send(answer)
    } catch (err) {
        console.log(err)
    }
});
/**
 * @swagger
 * /api/message/deleteMessage/{id}:
 *  delete:
 *      description: Delete message from list
 *      tags:
 *        - Message
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: put id of message need to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: A succesful response
 */ 
router.delete("/deleteMessage/:id", async (req, res) => {
    try {
        const answer = await MessageControllers.deleteMessage(req.params.id)
        res.send(answer)
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;