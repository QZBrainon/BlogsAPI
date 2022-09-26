const express = require('express');
const { userValidator } = require('../middlewares/userValidation');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userValidator, userController.post);

module.exports = router;