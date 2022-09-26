const express = require('express');
const { userValidator } = require('../middlewares/userValidation');
const jwtValidator = require('../auth/validateJWT');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', jwtValidator, userValidator, userController.post);

module.exports = router;