const mongoose = require('mongoose')

const user = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
})

module.exports = mongoose.model('User', user)