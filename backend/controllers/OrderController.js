const OrderService = require('../services/OrderService');

const createOrder = async ({ user_id, items }) => {
    const user = await User.findByPk(user_id);
    if (!user) throw new Error('Usuário não encontrado');

    let total = 0;
    const orderItemsData = [];

    for (const item of items) {
        const product = await Product.findByPk(item.product_id);
        if (!product) throw new Error(`Produto ID ${item.product_id} não encontrado`);

        if (product.stock < item.quantity) {
            throw new Error(`Estoque insuficiente para o produto "${product.name}"`);
        }

        const subtotal = parseFloat(product.price) * item.quantity;
        total += subtotal;

        orderItemsData.push({
            product_id: item.product_id,
            quantity: item.quantity,
            price: product.price
        });
    }

    const order = await Order.create({ user_id, total });

    for (const itemData of orderItemsData) {
        await OrderItem.create({
            order_id: order.id,
            ...itemData
        });

        const product = await Product.findByPk(itemData.product_id);
        product.stock -= itemData.quantity;
        await product.save();
    }

    return order;
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
