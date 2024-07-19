const bcrypt = require("bcrypt");
const UserModel = require("../model/userModel"); // Make sure the path is correct
const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middlewares/jwt");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Missing input",
        error: true,
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
        error: true,
      });
    }

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return res.status(400).json({
        message: "Password is incorrect",
        error: true,
      });
    }
    if (user && verifyPassword) {
      const { role, refreshToken, ...userData } = user.toObject();
      const accessToken = generateAccessToken(user._id, role);
      const newRefreshToken =  generateRefreshToken(user._id);
      UserModel.findByIdAndUpdate(
        user._id,
        { refreshToken: newRefreshToken },
        { new: true }
      );
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        message: "Login successful",
        user,
        accessToken,
      });
    } else {
      return res.status(500).json({
        message: "Something went wrong",
        error: true,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: true,
    });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await UserModel.findById(_id).select("-refreshToken -password -role");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

const refreshAccessToken = async (req, res) => {
  const cookie =req.cookies

  if(!cookie && !cookie.refreshToken) {
    return res.status(404).json({
      message: "No refresh token"
    })
  }
  const rs = await jwt.verify(cookie.refreshToken, process.env.SECRET_KEY)
  const response = await UserModel.findOne({_id: rs._id, refreshToken: cookie.refreshToken})
  return res.status(200).json({
     success: response ? true : false,
     newAccessToken: response ? generateAccessToken(response._id, response.role) : "Resfresh token not matched"
  })
}

module.exports = { loginController, getCurrentUser, refreshAccessToken };
