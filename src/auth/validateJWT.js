require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtAuth = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Invalid token' });

    try {
        const verifyUser = jwt.verify(token, secret);
        if (verifyUser) return next();
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = jwtAuth;