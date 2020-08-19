const router = require('express').Router();

const postController = require('../controllers/post');

router.delete('/:id', postController.destroy);
router.get('/', postController.index);
router.get('/create', postController.create);
router.get('/:id/edit', postController.edit);
router.get('/:id', postController.show);
router.patch('/:id', postController.update);
router.post('/', postController.store);

module.exports = router;
