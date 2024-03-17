const express = require('express')
const Router  = express.Router()
const jwtauth = require('../Middleware/auth')
const signup = require('../Controllers/signup')
const signin = require('../Controllers/signin')
const getAllData = require('../Controllers/GetAlldata')
const logout = require('../Controllers/Logout')

Router.post('/signup',signup)
Router.post('/signin',signin)
Router.get('/data',jwtauth,getAllData)
Router.get('/logout',logout)
// Router.get('/get',[jwtauth],getAllData)



module.exports = Router
