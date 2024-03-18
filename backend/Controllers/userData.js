const dataUser = require('../Models/dataSchema')

const userdata = async(req,res)=>{
    const {id} = req.params
    try {
    const user = await dataUser.findOne({_id:id})
        return res.status(200).json({
            message:"Done",
            users:user
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            message:"Error in getting id"
        })
    }
}

module.exports = userdata