const { Router } = require('express');
const { create, update, remove } = require('../controllers/comments');
const authMiddleware = require('../middlewares/authMiddleware');
const router = Router();

router.post('/:alcoolId', authMiddleware, create);
router.put('/:id', authMiddleware, update);
router.delete('/:id', authMiddleware, remove);

module.exports = router;