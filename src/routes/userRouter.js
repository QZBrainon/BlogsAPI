const express = require('express');
const { userValidator } = require('../middlewares/userValidation');
const userController = require('../controllers/userController');
const jwtAuth = require('../auth/validateJWT');

const router = express.Router();

router.post('/', userValidator, userController.post);

router.get('/', jwtAuth, userController.getAllUsers);

module.exports = router;