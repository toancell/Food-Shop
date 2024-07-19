const mongoose = require('mongoose')

const connectDB = async ()=>{
    
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        const conn = mongoose.connection
        conn.on("connected", ()=>{
            console.log("DB is connected")
        })
        conn.on("error", ()=>{
            console.log("DB is not connected",error)
        })
    }
    catch(error){
        console.log("something went wrong", error)
    }
}
module.exports = connectDB