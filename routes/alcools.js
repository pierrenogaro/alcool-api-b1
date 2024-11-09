const { Router } = require('express');
const { index} = require('../controllers/alcools');
const router = Router();

router.get('/all', index);

module.exports = router;