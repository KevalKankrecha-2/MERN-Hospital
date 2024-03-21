const express = require('express');
const {UserModel} = require('../models/User.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username && password) {
            const user = await UserModel.findOne({username: username, password: password}).lean();
            if (user) {
                const token = jwt.sign(user, "SECFORHWT!@#123");
                res.send({ message: "Successful", user: user, token: token });
            } else {
                res.send({ message: "Wrong credentials" });
            }
        }

    } catch (error) {
        console.log({ message: "Error" });
        console.log(error);
    }
});


module.exports = router;