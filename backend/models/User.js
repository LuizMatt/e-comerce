module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT
        },

        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Product.associate = (models) => {
        Product.hasMany(models.OrderItem, {
            foreignKey: 'product_id',
            as: 'order_items'
        });
    };

    return Product;
};
  