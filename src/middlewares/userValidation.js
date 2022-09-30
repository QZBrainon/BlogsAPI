const { userSchema } = require('../validations/userSchema');
const userService = require('../services/userService');

const userValidator = async (req, res, next) => {
    try {
        const validation = userSchema.validate(req.body); 
        if (validation.error) {
            const { error: { details: [{ message }] } } = validation;
            return res.status(400).json({ message });
        }
        const alreadyRegistered = await userService.checkByEmail(req.body.email);
    
        if (alreadyRegistered === null) {
            return next();
        }
        if (alreadyRegistered.message) {
            return res.status(409).json(alreadyRegistered);
        }
        return next();
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = {
    userValidator,
};