const { Router } = require('express');
const { index, show, create} = require('../controllers/alcools');
const router = Router();

router.get('/all', index);
router.get('/:id', show);
router.post('/create', create);

module.exports = router;