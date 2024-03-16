const mongoose = require('mongoose')

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
    }
})

module.exports = mongoose.model('userBlog',userSchema)