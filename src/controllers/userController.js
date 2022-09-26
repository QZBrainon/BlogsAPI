const userService = require('../services/userService');

const post = async (req, res) => {
    const token = req.headers.authorization;
    const newUser = req.body;
    await userService.post(newUser);

    return res.status(201).json(token);
};

module.exports = {
    post,
};