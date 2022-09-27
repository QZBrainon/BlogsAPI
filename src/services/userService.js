const { User } = require('../models');

const checkByEmail = async (email) => {
    const result = await User.findOne({ where: { email } });
    if (result) return ({ message: 'User already registered' });
    return ({ ok: 'Ready to register' });
};

const post = async ({ displayName, email, password, image }) => {
    const createdUser = await User.create({
        displayName,
        email,
        password,
        image,
    });
    return createdUser;
};

const getAllUsers = async () => {
    const allUsers = await User.findAll();
    return allUsers;
};

module.exports = {
    checkByEmail,
    post,
    getAllUsers,
};