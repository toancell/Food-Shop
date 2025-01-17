const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: "user"
    },
    refreshToken: {
        type: String,
    },
    passwordResetToken: {
        type: String,
    },
    passwordResetExpires: {
        type: String,
    },
}, {timestamps : true})
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;