const jwt = require('jsonwebtoken')
const generateAccessToken =(uid, role) =>{
    return jwt.sign({_id: uid, role}, process.env.SECRET_KEY, {expiresIn: "15s"})
}

const generateRefreshToken = (uid) =>{
    return jwt.sign({_id: uid}, process.env.SECRET_KEY, {expiresIn:"60s"})
}
module.exports ={generateAccessToken, generateRefreshToken}