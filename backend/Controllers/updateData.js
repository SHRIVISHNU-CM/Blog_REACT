const dataUser = require('../Models/dataSchema')


const updataData =async (req,res)=>{
    const {id} = req.params
    try{
        const users = await dataUser.findOneAndUpdate({_id:id},req.body)
        const updated = await dataUser.findOne({_id:id})
        console.log(updated)
        console.log(users)
        return res.status(200).json({
            message:users
        })
    }catch(e){
        console.log(e.message)
        return res.send(400).json({
            message:"invalid Id"
        })
    }

}

module.exports = updataData