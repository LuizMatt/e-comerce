const { OrderItem, Product } = require('../models');

const getAllOrderItems = async () => {
    return await OrderItem.findAll({
        include: {
            model: Product,
            as: 'product',
            attributes: ['name', 'price']
        }
    });
};

const getOrderItemById = async (id) => {
    const item = await OrderItem.findByPk(id, {
        include: {
            model: Product,
            as: 'product',
            attributes: ['name', 'price']
        }
    });

    if (!item) throw new Error('Item não encontrado');
    return item;
};

const updateOrderItem = async (id, quantity) => {
    const item = await OrderItem.findByPk(id);
    if (!item) throw new Error('Item não encontrado');

    item.quantity = quantity;
    await item.save();
};

const deleteOrderItem = async (id) => {
    const deleted = await OrderItem.destroy({ where: { id } });
    if (!deleted) throw new Error('Item não encontrado');
};

module.exports = {
    getAllOrderItems,
    getOrderItemById,
    updateOrderItem,
    deleteOrderItem
};
