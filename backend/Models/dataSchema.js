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
    }
})

userSchema.methods= {
     jwtToken(){
        return jwt.sign(
            {
                id:this._id,
                email:this.email
            },
            process.env.SECRET,
            {expiresIn:"1h"}
        )
    }
}

module.exports = mongoose.model('userBlog',userSchema)