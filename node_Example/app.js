const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()

app.use(cors())
app.use(bodyParser.json())

// Import Routes
const postRoutes = require('./routes/posts')
app.use('/posts', postRoutes)

//Middlewares
// app.use('/posts', () => {
//     console.log("This is middle ware running")
// })

// Routes
app.get('/', (req,res) => {
res.send("we are on home")
})


//Connect to DB
//mongodb+srv://lakshmi22:<password>@freecluster-xo0dq.mongodb.net/test
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect(
    process.env.DB_CONNECTION, () => {console.log("Connected to DB")})

// How to start listening to the ports
app.listen(3000)