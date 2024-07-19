const jwt = require("jsonwebtoken")
const verifyToken = (req, res, next) => {
    // Check if the authorization header exists and starts with "Bearer"
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1];

        // Verify the JWT token
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) return res.status(401).json({
                success: false,
                mes: 'Invalid access token'
            })

            // Attach the decoded token to the request object
            req.user = decoded;
            next();
        });
    } else {
        return res.status(401).json({
            success: false,
            message: "Authentication required"
        });
    }
};

const isAdmin = (req, res, nex) => {
    const {role} = req.user
    if(role !== 'admin') 
    {
        return res.status(401).json({
            message: " You are not admin",
            success: false
        })
    }
    next()

}

module.exports = { verifyToken };