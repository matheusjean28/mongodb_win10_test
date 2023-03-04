const express = require('express')
const router = express.Router();
const User = require('../model/user.model')

//take all User´s in DB
router.get('/', async (req, res) => {
    try {
        const Users = await User.find()
        res.json(Users)
    } catch (error) {
        console.log(error)
        res.status(400).send().json({error})
    }
})





module.exports = router;