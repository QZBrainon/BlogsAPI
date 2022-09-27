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

const getAllUsers = async (_req, res) => {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
};

module.exports = {
    post,
    getAllUsers,
};