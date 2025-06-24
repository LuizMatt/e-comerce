const express = require('express');
const router = express.Router();
const OrderItemController = require('../controllers/OrderItemController');

router.get('/', OrderItemController.getAllOrderItems);
router.get('/:id', OrderItemController.getOrderItemById);
router.put('/:id', OrderItemController.updateOrderItem);
router.delete('/:id', OrderItemController.deleteOrderItem);

module.exports = router;
