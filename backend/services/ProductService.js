const { Product } = require('../models');

const createProduct = async ({ name, description, price, stock }, imagePath) => {
    const product = await Product.create({
        name,
        description,
        price,
        stock,
        image: imagePath || null
    });

    return product;
};

const getAllProducts = async () => {
    return await Product.findAll();
};

const getProductById = async (id) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Produto não encontrado');
    return product;
};

const updateProduct = async (id, { name, description, price, stock }, imagePath) => {
    const [updated] = await Product.update(
        {
            name,
            description,
            price,
            stock,
            ...(imagePath && { image: imagePath })
        },
        { where: { id } }
    );

    if (!updated) throw new Error('Produto não encontrado');
};

const deleteProduct = async (id) => {
    const deleted = await Product.destroy({ where: { id } });
    if (!deleted) throw new Error('Produto não encontrado');
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
