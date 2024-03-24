const jwt = require('jsonwebtoken')

const jwtauth = (req,res,next) =>{
    let token = req.cookies.access_token;
    if(!token) return res.status(400).json({
            message:"Token Unavailable"})

        jwt.verify(token,process.env.SECRET,(err,decoded)=>{
            if(err){
                return res.status(400).json({
                    message:"Error in verification"
                })
            }else{
                req.username = decoded.username
                next()
            }
        })
      
}
module.exports = jwtauth