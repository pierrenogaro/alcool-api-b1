const { Router } = require('express');
const { create } = require('../controllers/comments');
const authMiddleware = require('../middlewares/authMiddleware');
const router = Router();

router.post('/:alcoolId', authMiddleware, create);

module.exports = router;