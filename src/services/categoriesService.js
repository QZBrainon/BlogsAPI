const { Category } = require('../models');

const post = async (category) => {
    const { name } = category;
    const { dataValues } = await Category.create({ name });
    return dataValues;
};

module.exports = {
    post,
};