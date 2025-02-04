const express = require('express');
const router = express.Router();
const verifyToken  = require('../middleware/jwt-verify');
const {
    GetUserOrdersController,
    CreateOrderController,
  } = require('../controllers/order.controller');
// POST - /confirm-order {addrss, items, totalAmount}
router.get('/user-orders-data', verifyToken, GetUserOrdersController);
router.post('/confirm-order', verifyToken, CreateOrderController);
module.exports = router;