const express = require("express");
const router = express.Router();
const PeopleControllers = require("../controllers/people.controller")


router.get("/", async (req, res) => {
    try {
        const people = await PeopleControllers.getPeople()
        res.send(people)
    } catch (err) {
        console.log(err)
    }
});
router.get("/peopleById/:id", async (req, res) => {
    try {
        const peopleById = await PeopleControllers.getPeopleById(req.params.id)
        res.send(peopleById)
    } catch (err) {
        console.log(err)
    }
});
router.post("/create", async (req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.log(err)
    }
});
router.put("/edit/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body);
    } catch (err) {
        console.log(err)
    }
});
router.delete("/delete/:id", async (req, res) => {
    try {
        console.log(req.params.id);
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;