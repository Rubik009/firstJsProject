const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();

function People(name, age) {
    this.name = name;
    this.age = age;
}
let people1 = new People('Roman', 25)
let people2 = new People('Alesya', 23)
let people = []
people.push(people1,people2)

router.get("/", (req, res) => res.send(people));
router.get("/:id", (req, res)=> {
    const peopleByAge = people.find(item => item.age == req.params.id).name
    res.send(peopleByAge)
})
router.post("/create")
router.put("/edit")
router.delete("/delete")

module.exports = router;