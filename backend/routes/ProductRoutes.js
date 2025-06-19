const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const upload = require('../middlewares/upload');

router.post('/products', upload.single('image'), ProductController.createProduct);
router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProductById);
router.put('/products/:id', upload.single('image'), ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);

module.exports = router;
