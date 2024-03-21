const dataUser = require('../Models/dataSchema')


const deleteData =async (req,res)=>{
    const {id} = req.params
    try{
        const user = await dataUser.findOneAndDelete({_id:id})
        return res.status(200).json({
            user
        })

    }catch(e){
        console.log("no")
    }
}

module.exports = deleteData