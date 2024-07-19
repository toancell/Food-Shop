const UserModel = require('../model/userModel');
const logoutController = async (req, res) =>{
    const cookie= req.cookies
    if(!cookie || !cookie.refreshToken){
        return res.status(400).json({
            message: "You dont log in",
        })
    }
    await UserModel.findOneAndUpdate({refreshToken: cookie.refreshToken},{refreshToken:""},{new: true})
    res.clearCookie("refreshToken",{
        httpOnly: true,
        secure: true,
    })
    return res.status(200).json({
        success: true,
        message: "Log Out Successfull"
    })

}
module.exports= logoutController