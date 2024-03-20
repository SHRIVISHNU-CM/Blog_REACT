const dataUser = require('../Models/dataSchema')



const signin = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !password || !email) {
            return res.status(400).json({
                message: "Enter all"
            })
        }
        
        const user = await dataUser.findOne({ email: email })
        if (user) {
            if (user.password != password) {
                return res.status(400).json({
                    message: "Check password"
                })
            }
            return res.status(200).json({
                message:"singed in",

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
