const express = require('express');
const router = express.Router();
const registerController = require('../controller/registerController.js')
const {verifyToken} = require('../middlewares/verifyToken')
const {loginController, getCurrentUser, refreshAccessToken} = require('../controller/loginController.js')
const logoutController = require('../controller/logoutController.js')
const {forgotPassword} = require('../controller/forgotPassword.js')
router.post("/register", registerController )
router.post("/login", loginController)
router.post("refreshtoken", refreshAccessToken)
router.get("/current",verifyToken, getCurrentUser)
router.post("/logout", logoutController)
router.get("/forgotpassword", forgotPassword)
module.exports = router;

