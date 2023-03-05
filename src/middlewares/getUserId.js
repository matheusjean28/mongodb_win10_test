const User = require('../model/user.model')

module.exports = async function getUserId(req, res, next) {
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: "User not found" })
        }

    } catch (error) {
        console.log(error)
        return res.sendStatus(500).json({ error })
    }
    console.log(res.User)
    res.user = user
    next()
}