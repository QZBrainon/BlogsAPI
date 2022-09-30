const express = require('express');
const jwtAuth = require('../auth/validateJWT');
const categoriesIdsValidation = require('../middlewares/categoriesIdsValidation');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/', jwtAuth, categoriesIdsValidation, postController.post);

module.exports = router;