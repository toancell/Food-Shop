const UserModel = require('../model/userModel')
const crypto= require("crypto")
const sendMail = require("../ultis/sendMail")
const forgotPassword = async (req,res) =>{
    const {email} = req.query
    if(!email){
        return res.status(400).json({message: "Missing input"})
    }
    const user =await UserModel.findOne({email})
    
    if(!user){
        return res.status(400).json({message: "User not found"})
    }
    const resetToken = crypto.randomBytes(32).toString('hex')
    user.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    user.passwordResetExpires = Date.now() + 15 * 60 * 1000 
    await user.save()
    const html= `Enter this link to change password. This link will be close in 15 minutes. <a href=${process.env.URL_SERVER}/api/reset-password/${resetToken}>Click here</a>`
    const rs = await sendMail(email,html)
    return res.status(200).json({
        success: rs ? true : false,
        message: rs ? rs : "Fail"
    })
}
const verifyResetPassword = async(req,res) => {
    const {token} =req.params
    const passwordResetToken = crypto.createHash("sha256").update(token).digest('hex')
    const user = await UserModel.findOne({passwordResetToken})
}
module.exports = {forgotPassword , verifyResetPassword}