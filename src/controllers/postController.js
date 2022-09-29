const postService = require('../services/postService');

const post = async (req, res) => {
    const postDetails = req.body;
    const { userName } = req;

    const result = await postService.post(postDetails, userName);
    if (!result) return res.status(500).json('not working');
    return res.status(200).json(result);
};

module.exports = {
    post,
};