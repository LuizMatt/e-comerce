const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const upload = require('../middlewares/upload');

router.post('/', upload.single('image'), ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.put('/:id', upload.single('image'), ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
