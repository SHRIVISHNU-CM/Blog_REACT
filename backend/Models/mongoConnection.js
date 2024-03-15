const mongoose = require('mongoose')

const DataMongoose = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("MONGODB Connected"))
        .catch((e) => console.log(e.message))
}

module.exports = DataMongoose