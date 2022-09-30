const categoriesService = require('../services/categoriesService');

const validateCategoryIds = async (req, res, next) => {
    const { categoryIds } = req.body;
    const allCategories = await categoriesService.getAll();
    const allExistingIds = allCategories.map((category) => category.id);
    categoryIds.forEach((categoryId) => {
        const check = allExistingIds.every((existingId) => existingId === categoryId);
        if (check === false) {
            return res.status(400).json({ message: '"categoryIds" not found' });
        }
    });
    return next();
};

module.exports = validateCategoryIds;