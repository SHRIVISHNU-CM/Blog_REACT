const express = require('express')
const Router  = express.Router()
const jwtauth = require('../Middleware/auth')
const signup = require('../Controllers/signup')
const signin = require('../Controllers/signin')
const getAllData = require('../Controllers/GetAlldata')
const userdata = require('../Controllers/userData')
const logout = require('../Controllers/Logout')
const updataData = require('../Controllers/updateData')
const deleteData = require('../Controllers/deleteData')



Router.post('/signup',signup)
Router.post('/signin',signin)
Router.get('/data',getAllData)
Router.get('/userdata/:id',userdata)
Router.put('/update/:id',updataData)
Router.delete('/delete/:id',deleteData)
Router.get('/logout',logout)




module.exports = Router
