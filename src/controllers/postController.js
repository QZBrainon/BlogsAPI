const postService = require('../services/postService');

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

module.exports = {
    post,
};