const dataUser = require('../Models/dataSchema')

const signup = async (req, res) => {
    const { username, email, password, mobile } = req.body;
    try {

        const checkusername = await dataUser.findOne({ username: username })
        if (checkusername) {
            return res.status(400).json({
                message: "already there"
            })
        } 
            const users = await dataUser.create({
                username, email, password, mobile
            })

            return res.status(200).json({
                message: users
            })
        





    } catch (e) {
        console.log(e.message)
    }

}

module.exports = signup