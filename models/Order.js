module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },

        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pendente'
        }
    });

    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });

        Order.hasMany(models.OrderItem, {
            foreignKey: 'order_id',
            as: 'items'
        });
    };

    return Order;
};
  