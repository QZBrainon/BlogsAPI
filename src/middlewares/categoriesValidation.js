const { categoriesSchema } = require('../validations/categoriesSchema');

const categoriesValidator = async (req, res, next) => {
    const validation = categoriesSchema.validate(req.body);
    if (validation.error) {
        const { error: { details: [{ message }] } } = validation;
        return res.status(400).json(message);
        }
    return next();
};

module.exports = categoriesValidator;