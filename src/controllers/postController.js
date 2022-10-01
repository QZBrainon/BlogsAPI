const postService = require('../services/postService');
const userService = require('../services/userService');

const post = async (req, res) => {
    const postDetails = req.body;
    const { userName } = req;
    const { title, content, categoryIds } = postDetails;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const result = await postService.post(postDetails, userName);
    return res.status(201).json(result);
};

const getAllPosts = async (req, res) => {
    const result = await postService.getAllPosts();
    return res.status(200).json(result);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const result = await postService.getPostById(id);
    if (!result) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(result);
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.id;
    const user = await userService.getById(userId);
    const userPosts = user.posts;
    const validation = userPosts.some((userPost) => userPost.id === Number(id));
    if (!validation) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    await postService.updatePost({ title, content, id });
    const result = await postService.getPostById(id);
    return res.status(200).json(result);
};

module.exports = {
    post,
    getAllPosts,
    getPostById,
    updatePost,
};