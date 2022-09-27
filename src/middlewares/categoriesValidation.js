const { categoriesSchema } = require('../validations/categoriesSchema');

const categoriesValidator = async (req, res, next) => {
    try {
        categoriesSchema.validate(req.body);
        return next();
    } catch (e) {
        return res.status(400).json(e.message);
    }
};

module.exports = categoriesValidator;