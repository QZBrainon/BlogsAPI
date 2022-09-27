const { Category } = require('../models');

const post = async (category) => {
    const { name } = category;
    const { dataValues } = await Category.create({ name });
    console.log(dataValues);
    return ({ id: dataValues.id, name });
};

module.exports = {
    post,
};