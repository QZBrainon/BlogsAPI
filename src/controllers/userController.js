require('dotenv').config();
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;

const post = async (req, res) => {
    const newUser = req.body;
    const result = await userService.post(newUser);
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign({ 
        data: { id: result.dataValues.id, name: newUser.displayName, email: newUser.email }, 
    }, secret, jwtConfig);

    return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
};

module.exports = {
    post,
    getAllUsers,
    getById,
};