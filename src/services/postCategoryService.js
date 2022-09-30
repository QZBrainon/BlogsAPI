const { PostCategory } = require('../models');

const post = async (postId, categoryId) => {
    const result = await PostCategory.create({ postId, categoryId });
    return result;
};

module.exports = {
    post,
};