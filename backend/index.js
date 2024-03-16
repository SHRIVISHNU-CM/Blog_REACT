require('dotenv').config()
const express = require('express');
const app = express()
const DataBaseConnection =  require("./Models/mongoConnection")
const Router = require('./Router/routes')
const cors = require('cors')
const PORT = 5001||5000
DataBaseConnection()
app.use(express.json())
app.use(cors({
    credentials:true
}))

app.use('/blog',Router)

app.listen(PORT, ()=>console.log(`Server is running at ${PORT}`))