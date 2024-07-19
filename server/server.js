const connectDB = require('./config/connectDB')
const express = require("express");
const cors = require("cors");
const app = express();
const router= require("./router/userRoutes")
const Port = 8000;
const cookieParser= require("cookie-parser");
require("dotenv").config();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
     origin: process.env.FRONTEND_URL, 
     credentials: true }));
app.use("/api", router)
app.get("/", function (req, res) {
  res.json(
    {
        message: "Server is running on " + Port
    }
  );
});

connectDB()
    .then(() => {
        app.listen(Port, () => {
            console.log("Your app is running on port " + Port);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to the database", err);
    });
