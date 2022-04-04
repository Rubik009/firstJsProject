const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const UsersControllers = require('../controllers/users.controller');
const authenticatToken = require('../middleware/auth')


router.get("/", authenticatToken ,async (req, res) => {
    try {
        const answer = await UsersControllers.getUsers()
        res.json(answer)
    } catch (err) {
        res.json({message: err})
    }
});
router.post("/register", async (req,res) => {
    try{
        const user = await UsersControllers.registerUser(req.body);
        res.send(user)
    }catch (err){
        console.log(err)
    }
});
router.post('/login', async (req, res) => {
    try {
        const token = await UsersControllers.loginUser(req.body);
        res.json(token);
    } catch (err) {
        res.json({message : err})
    }
});

module.exports = router;