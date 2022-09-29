const express = require('express');
const jwtAuth = require('../auth/validateJWT');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/', jwtAuth, postController.post);

module.exports = router;