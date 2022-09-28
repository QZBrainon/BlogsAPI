const categoriesService = require('../services/categoriesService');

const post = async (req, res) => {
    const category = req.body;
    const result = await categoriesService.post(category);
    return res.status(201).json(result);
};

const getAll = async (_req, res) => {
    const result = await categoriesService.getAll();
    return res.status(200).json(result);
};

module.exports = {
    post,
    getAll,
};