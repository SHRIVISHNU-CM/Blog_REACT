const dataUser = require('../Models/dataSchema')

const signin = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !password || !email) {
            return res.status(400).json({
                message: "Enter all"
            })
        }
        
        const user = await dataUser.findOne({ email: email }).select('+password')
        if (user) {
            if (user.password != password) {
                return res.status(400).json({
                    message: "Check password"
                })
            }
            const token = user.jwtToken();
            user.password = undefined
            const cookiesOptions = {
                maxAge: 1*60*1000,
                httpOnly:true
            }
            return res.cookie("token" , token,cookiesOptions).status(200).json({
                message: "signin",
                token:token
            })
            

        } else {
            return res.status(400).json({
                message: "check email"
            })
        }


    } catch (e) {
        console.log(e.message)
        return res.status(400).json(e.message)
    }
}
module.exports = signin
