const { Order, OrderItem, Product, User } = require('../models');

const createOrder = async ({ user_id, items }) => {
    const user = await User.findByPk(user_id);
    if (!user) throw new Error('Usuário não encontrado');

    let total = 0;
    const orderItemsData = [];

    for (const item of items) {
        const product = await Product.findByPk(item.product_id);
        if (!product) throw new Error(`Produto ID ${item.product_id} não encontrado`);

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
    }

    return order;
};

const getOrderById = async (id) => {
    const order = await Order.findByPk(id, {
        include: [
            {
                model: OrderItem,
                as: 'items',
                include: [
                    {
                        model: Product,
                        attributes: ['name']
                    }
                ]
            },
            {
                model: User,
                as: 'user',
                attributes: ['id', 'name', 'email']
            }
        ]
    });

    if (!order) throw new Error('Pedido não encontrado');
    return order;
};

const getAllOrders = async () => {
    return await Order.findAll({
        include: [
            {
                model: OrderItem,
                as: 'items',
                include: [{ model: Product, attributes: ['name'] }]
            },
            {
                model: User,
                as: 'user',
                attributes: ['id', 'name', 'email']
            }
        ]
    });
};

const updateOrderStatus = async (id, status) => {
    const [updated] = await Order.update({ status }, { where: { id } });
    if (!updated) throw new Error('Pedido não encontrado ou não atualizado');
};

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrderStatus
};
