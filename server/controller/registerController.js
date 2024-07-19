
const hashPassword = require('../ultis/hashPassword')
const UserModel = require("../model/userModel")
const registerController = async (req,res) =>{
    try{
        const {name, password, email, profile_pic } = req.body;
        const checkEmail = await UserModel.findOne({ email})
        if(checkEmail){
            return res.status(400).json({
                message: "Email da ton tai",
                err: true,
            })
        }
        const hashedPassword = await hashPassword(password)
        const newUser = new UserModel({
            name,
            password: hashedPassword,
            email,
            profile_pic
        })
        await newUser.save()
        return res.status(200).json({
            message: "User saved successfully",
            data: newUser,
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: err.message,
            err: true
        });
    }
}
module.exports = registerController