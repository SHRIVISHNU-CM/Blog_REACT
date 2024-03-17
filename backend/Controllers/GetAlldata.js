const dataUser = require('../Models/dataSchema')

const getAllData = async(req,res)=>{
    try {
        const getuser = await dataUser.find()
        console.log(getuser)
        return res.status(200).json({
            message:"Success",
            user:getuser
        })
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message:"Falied in getall data"
        })
    }
}
module.exports = getAllData