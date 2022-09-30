const categoriesService = require('../services/categoriesService');

const validateCategoryIds = async (req, res, next) => {
    const { categoryIds } = req.body;
    const allCategories = await categoriesService.getAll();
    const allExistingIds = allCategories.map((category) => category.id);
    const result = categoryIds.map((categoryId) => {
        const check = allExistingIds.some((existingId) => existingId === categoryId);
        return check;
    });

    if (result.includes(false)) {
        return res.status(400).json({ message: '"categoryIds" not found' });
    }
    return next();
};

module.exports = validateCategoryIds;