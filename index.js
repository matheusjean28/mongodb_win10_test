//imports
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./src/routes/router')

//variables
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
db = mongoose.connection
db.on('error', (error) => { console.log(error) })
db.once('open', () => {
    console.log('conected to database')
})




app.use('/', router)
app.use(express.json())
app.listen(3000, () => {
    console.log('app is runing on port 3000')
})