const { User, BlogPost } = require('../models');

const checkByEmail = async (email) => {
    const result = await User.findOne({ where: { email } });
    if (result) return ({ message: 'User already registered' });
    return result;
};

const checkByName = async (displayName) => {
    const result = await User.findOne({ where: { displayName } });
    return result;
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
    const allUsers = await User.findAll({ attributes: {
         exclude: ['password'], 
        } });
    return allUsers;
};

const getById = async (id) => {
    const user = await User.findOne({ 
        where: { id }, 
        attributes: { exclude: ['password'] },
        include: { model: BlogPost, as: 'posts' }, 
    });
    return user;
};

module.exports = {
    checkByEmail,
    post,
    getAllUsers,
    getById,
    checkByName,
};