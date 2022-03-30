const express = require("express");
const router = express.Router();
const PeopleControllers = require("../controllers/people.controller")


router.get("/", (req, res) => {
    try {
        const people = PeopleControllers.getPeople()
        res.send(people)
    } catch (err) {
        console.log(err)
    }
});
router.get("/peopleById/:id", (req, res) => {
    try {
        const peopleById = PeopleControllers.getPeopleById(req.params.id)
        res.send(peopleById)
    } catch (err) {
        console.log(err)
    }
});
router.post("/create");
router.put("/edit");
router.delete("/delete");

module.exports = router;