require('dotenv').config();

const { BlogPost } = require('../models');
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

module.exports = {
    post,
};