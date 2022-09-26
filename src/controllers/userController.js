require('dotenv').config();
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;

const post = async (req, res) => {
    const newUser = req.body;
    await userService.post(newUser);
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign({ data: { email: req.body.email } }, secret, jwtConfig);

    return res.status(201).json({ token });
};

module.exports = {
    post,
};