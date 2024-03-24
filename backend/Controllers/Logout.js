const logout = (req,res)=>{
    try{
        return res.cookie('access_token', null,{
            expiresIn:new Date()
        }).json({
            message:"Logout"
        }).status(200)
    }catch(e){
        return res.status(400).json({
            message:e.message
        })
    }
}

module.exports = logout