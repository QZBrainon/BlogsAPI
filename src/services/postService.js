require('dotenv').config();

const { BlogPost } = require('../models');
const userService = require('./userService');

const post = async (postDetails, userName) => { // 
    // (userName vem do validateJWT.js como  req.userName = verify.data.name;)
    const { id } = await userService.checkByName(userName);
    const { title, content } = postDetails;
    const result = await BlogPost.create(
        { 
            title, 
            content,
            userId: id, 
        },
        );
    return result;
};

module.exports = {
    post,
};