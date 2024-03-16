const express = require('express')
const Router  = express.Router()
const signup = require('../Controllers/signup')
const signin = require('../Controllers/signin')

Router.post('/signup',signup)
Router.post('/signin',signin)




module.exports = Router
