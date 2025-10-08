const ProductService = require('../services/ProductService');

const createProduct = async (req, res) => {
    try {
        const product = await ProductService.createProduct(req.body, req.file ? `/uploads/${req.file.filename}` : null);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await ProductService.getProductById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        await ProductService.updateProduct(
            req.params.id,
            req.body,
            req.file ? `/uploads/${req.file.filename}` : null
        );
        res.json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        await ProductService.deleteProduct(req.params.id);
        res.json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
