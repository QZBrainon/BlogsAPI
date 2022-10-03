const express = require('express');
const jwtAuth = require('../auth/validateJWT');
const categoriesIdsValidation = require('../middlewares/categoriesIdsValidation');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/', jwtAuth, categoriesIdsValidation, postController.post);

router.get('/search', jwtAuth, postController.getPostByQuery);
router.get('/', jwtAuth, postController.getAllPosts);
router.get('/:id', jwtAuth, postController.getPostById);

router.put('/:id', jwtAuth, postController.updatePost);

router.delete('/:id', jwtAuth, postController.deletePost);

module.exports = router;