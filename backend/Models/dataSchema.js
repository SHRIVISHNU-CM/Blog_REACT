const mongoose = require('mongoose')
const jwt  = require('jsonwebtoken')
const {Schema} = mongoose

const userSchema = new Schema({
    username:{
        type:String,
        trim:true,
        required:[true,"Enter username"]
    },
    email:{
        type:String,

    },
    password:{
        type:String,
        required:[true,"Enter password"]
    },
    mobile:{
        type:Number,
        required:[true,"Enter Mobile Number"]
    },
    header:{
        type:String
    },
    description:{
        type:String
    },
    important:{
        type:String
    }
})



module.exports = mongoose.model('userBlog',userSchema)