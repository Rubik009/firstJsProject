const express = require("express");
const router = express.Router();
const PeopleControllers = require("../controllers/people.controller")

/**
 * @swagger
 * /api/people:
 *  get:
 *      description: Use a request to get list of people
 *      tags:
 *          - People
 *      responses:
 *          '200':
 *              description: A succesful response
 */ 
router.get("/", async (req, res) => {
    try {
        const people = await PeopleControllers.getPeople()
        res.send(people)
    } catch (err) {
        console.log(err)
    }
});

/**
 * @swagger
 * /api/people/peopleById/{id}:
 *  get:
 *      description: Use a request to get person by id
 *      tags:
 *        - People
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
router.get("/peopleById/:id", async (req, res) => {
    try {
        const peopleById = await PeopleControllers.getPeopleById(req.params.id)
        res.send(peopleById)
    } catch (err) {
        console.log(err)
    }
});

/**
 * @swagger
 * /api/people/addPerson:
 *  post:
 *      description: Add person to list
 *      tags:
 *        - People
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: Person
 *          required: true
 *          description: Add object with properties
 *          schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          '200':
 *              description: A succesful response
 * definitions:
 *  Person:
 *      type: object
 *      required:
 *          - id
 *          - name
 *          - age
 *      properties:
 *          id: 
 *              type: integer
 *          name: 
 *              type: string
 *          age: 
 *              type: integer
 */ 
router.post("/addPerson", async (req, res) => {
    try {
        const answer = await PeopleControllers.addPerson(req.body)
        res.send(answer)
    } catch (err) {
        console.log(err)
    }
});

/**
 * @swagger
 * /api/people/edit/{id}:
 *  put:
 *      description: Заменить человека в списке
 *      tags:
 *        - People
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: write id person need to change
 *          type: integer
 *        - in: body
 *          name: Person
 *          required: true
 *          description: Object to change 
 *          schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          '200':
 *              description: A succesful response
 * definitions:
 *  Person:
 *      type: object
 *      required:
 *          - id
 *          - name
 *          - age
 *      properties:
 *          id: 
 *              type: integer
 *          name: 
 *              type: string
 *          age: 
 *              type: integer
 */ 
router.put("/edit/:id", async (req, res) => {
    try {
        const answer = await PeopleControllers.editPerson(req.params.id, req.body)
        res.send(answer)
    } catch (err) {
        console.log(err)
    }
});

/**
 * @swagger
 * /api/people/delete/{id}:
 *  delete:
 *      description: Delete person from list
 *      tags:
 *        - People
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: put id of person need to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: A succesful response
 */ 
router.delete("/delete/:id", async (req, res) => {
    try {
        const answer = await PeopleControllers.deletePerson(req.params.id)
        res.send(answer)
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;