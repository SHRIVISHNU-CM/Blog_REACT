const logout = (req,res)=>{
    try{
        const cookieOptions = {
            expires:new Date(),httpOnly:true
        }
        return res.cookie('token', null,cookieOptions).json({
            message:"Logout"
        })
    }catch(e){
        res.status(400).json({
            message:"ERROR"
        })
    }
}

module.exports = logout