const categoriesService = require('../services/categoriesService');

const post = async (req, res) => {
    const category = req.body;
    const result = await categoriesService.post(category);
    return res.status(201).json(result);
};

module.exports = {
    post,
};