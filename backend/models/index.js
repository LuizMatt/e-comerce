const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User')(sequelize, DataTypes);
const Product = require('./Product')(sequelize, DataTypes);
const Order = require('./Order')(sequelize, DataTypes);
const OrderItem = require('./OrderItem')(sequelize, DataTypes);

const models = {
    User,
    Product,
    Order,
    OrderItem
};

Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models);
    }
});

module.exports = {
    sequelize,
    Sequelize,
    ...models
};
