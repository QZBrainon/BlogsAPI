const { userSchema } = require('../validations/userSchema');
const userService = require('../services/userService');

const userValidator = async (req, res, next) => {
    const alreadyRegistered = await userService.checkByEmail(req.body.email);
    if (alreadyRegistered !== undefined) return res.status(409).json(alreadyRegistered);
    const validation = userSchema.validate(req.body);
    if (!validation.error) return next();
    const { error: { details: [{ message }] } } = validation;
    if (message) return res.status(400).json({ message });
};

module.exports = {
    userValidator,
};