require('dotenv').config();

const { BlogPost, User, Category } = require('../models');
const userService = require('./userService');
const PostCategoryService = require('./postCategoryService');

const post = async (postDetails, userName) => { // 
    // (userName vem do validateJWT.js como  req.userName = verify.data.name;)
    const { id } = await userService.checkByName(userName);
    const { title, content, categoryIds } = postDetails;
    const result = await BlogPost.create(
        { 
            title, 
            content,
            userId: id, 
        },
        );
    
        categoryIds.forEach(async (category) => {
            await PostCategoryService.post(result.id, category);
        });
    
    return result;
};

const getAllPosts = async () => {
    const result = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
    return result;
};

module.exports = {
    post,
    getAllPosts,
};