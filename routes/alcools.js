const { Router } = require('express');
const { index, show, create, update, remove, getAllCategories, getCategorie} = require('../controllers/alcools');
const authMiddleware = require("../middlewares/authMiddleware");
const router = Router();

router.get('/all', index);
router.get('/categories/all', getAllCategories);
router.get('/categories/:categorie', getCategorie);
router.get('/:id', show);
router.post('/create',authMiddleware, create);
router.put('/update/:id',authMiddleware, update);
router.delete('/delete/:id',authMiddleware, remove);

module.exports = router;