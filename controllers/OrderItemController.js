const OrderItemService = require('../services/OrderItemService');

const getAllOrderItems = async (req, res) => {
    try {
        const items = await OrderItemService.getAllOrderItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrderItemById = async (req, res) => {
    try {
        const item = await OrderItemService.getOrderItemById(req.params.id);
        res.json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateOrderItem = async (req, res) => {
    try {
        const { quantity } = req.body;
        await OrderItemService.updateOrderItem(req.params.id, quantity);
        res.json({ message: 'Item atualizado com sucesso' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteOrderItem = async (req, res) => {
    try {
        await OrderItemService.deleteOrderItem(req.params.id);
        res.json({ message: 'Item removido com sucesso' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    getAllOrderItems,
    getOrderItemById,
    updateOrderItem,
    deleteOrderItem
};
