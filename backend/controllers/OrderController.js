const OrderService = require('../services/OrderService');

const createOrder = async (req, res) => {
    try {
        const order = await OrderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await OrderService.getOrderById(req.params.id);
        res.json(order);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.getAllOrders();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        await OrderService.updateOrderStatus(req.params.id, req.body.status);
        res.json({ message: 'Status atualizado com sucesso' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrderStatus
};
