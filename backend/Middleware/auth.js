const jwt = require('jsonwebtoken')

const jwtauth = (req,res,next) =>{
    const token = (req.cookies && req.cookies.token) ||null;

    if(!token){
        return res.status(400).json({
            message:"Invalid token"
        })
    }
    try{
        const  payload = jwt.verify(token,process.env.SECRET);
        req.user = {
            email:payload.email,
            id:payload.id
        }

    }catch(e){
        console.log(e.message)
        res.status(400).json({
            message:"Error in midddleware"
        })
    }
    next();
}
module.exports = jwtauth