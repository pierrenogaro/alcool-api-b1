const { Router } = require('express');
const { index, show, create, update, deleteAlcool} = require('../controllers/alcools');
const router = Router();

router.get('/all', index);
router.get('/:id', show);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteAlcool);

module.exports = router;