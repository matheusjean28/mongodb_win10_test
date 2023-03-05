const express = require('express')
const router = express.Router();
const User = require('../model/user.model')
const getUserId = require('../middlewares/getUserId')

//take all User´s in DB
router.get('/', async (req, res) => {
    try {
        const Users = await User.find()
        res.json(Users)
    } catch (error) {
        console.log(error)
        res.status(400).send().json({ mensage: error })
    }
});

//get user using ID

//create a new user using data throuth req.body
router.post('/', async (req, res) => {

    const user = new User({
        userName: req.body.userName,
        age: req.body.age
    })
    try {
        const newUser = await user.save()
        res.sendStatus(201).json({ mesagem: newUser })
    } catch (error) {
        console.log(error)
    }
})



router.get('/:id', getUserId, (req, res) => {
    res.json(res.user)
})

async function userCreateVerification (req, res, next){
    if (User.find(req.body.userName)){
        console.log(User.find(req.body.userName))
        return console.log("user alredy exist")
    } else {
        return
    }
    
}
module.exports = router;