require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtAuth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });

    try {
        const verify = jwt.verify(token, secret);
        req.userEmail = verify.data.email;
        req.userName = verify.data.name;
        return next();
    } catch (e) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = jwtAuth;