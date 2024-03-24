const dataUser = require('../Models/dataSchema')
const jwt = require('jsonwebtoken')


const signin = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !password || !email) {
            return
        }

        const user = await dataUser.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ message: "Check again" })
        }

        const access_token = jwt.sign({ id: user._id }, process.env.SECRET, {
            expiresIn: '1h'
        })
        return res.cookie('access_token', access_token, {
            maxAge: 2 * 60 * 60 * 1000,
            httpOnly: true
        }).json(access_token).status(200)



    } catch (e) {
        console.log(e.message)
        return res.status(400).json(e.message)
    }
}
module.exports = signin
