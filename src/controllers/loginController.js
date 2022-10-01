require('dotenv').config();
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: 'Some required fields are missing' });
        }

        const user = await loginService.login(email, password);

        if (!user) return res.status(400).json({ message: 'Invalid fields' });

        const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
        const token = jwt.sign({ 
            data: { id: user.id, name: user.displayName, email: user.email }, 
        }, secret, jwtConfig);
        
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    login,
};