const { Router } = require('express');
const { index, show} = require('../controllers/alcools');
const router = Router();

router.get('/all', index);
router.get('/:id', show);

module.exports = router;