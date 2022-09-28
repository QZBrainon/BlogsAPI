const express = require('express');
const jwtAuth = require('../auth/validateJWT');
const categoriesValidator = require('../middlewares/categoriesValidation');
const categoriesController = require('../controllers/categoriesController');

const router = express.Router();

router.post('/', jwtAuth, categoriesValidator, categoriesController.post);
router.get('/', categoriesController.getAll);

module.exports = router;