const mongoose = require('mongoose')
const schema = {
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
}
const userSchema = new mongoose.Schema(schema)
const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel