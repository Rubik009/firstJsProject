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
router.post("/create");
router.put("/edit");
router.delete("/delete");

module.exports = router;