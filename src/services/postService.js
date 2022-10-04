require('dotenv').config();

const { BlogPost, User, Category, Sequelize } = require('../models');
const userService = require('./userService');
const PostCategoryService = require('./postCategoryService');

const { Op } = Sequelize;

const post = async (postDetails, userName) => { // 
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

const getPostById = async (id) => {
    const result = await BlogPost.findOne({
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
    return result;
};

const updatePost = async ({ title, content, id }) => {
    const result = await BlogPost.update({ title, content }, { where: { id } });
    return result;
};

const deletePost = async (id) => {
    const result = await BlogPost.destroy({ where: { id } });
    return result;
};

const getPostByQuery = async (queryString) => {
    const result = await BlogPost.findAll({
        where: {
            [Op.or]: [
                { title: { [Op.substring]: queryString } },
                { content: { [Op.substring]: queryString } },
            ],
        },
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
    getPostById,
    updatePost,
    deletePost,
    getPostByQuery,
};