const { Category } = require('../models');

const post = async (category) => {
    const { name } = category;
    const { dataValues } = await Category.create({ name });
    return dataValues;
};

const getAll = async () => {
    const result = await Category.findAll();
    return result;
};

module.exports = {
    post,
    getAll,
};