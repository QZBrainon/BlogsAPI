require('dotenv').config();
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;

const jwtAuth = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Invalid token' });

    try {
        const decoded = jwt.verify(token, secret);
        const { email, password } = decoded.data;
        const user = await loginService.login(email, password);
        if (!user) return res.status(401).json({ message: 'User not found' });
        req.user = user;
        return next();
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = jwtAuth;