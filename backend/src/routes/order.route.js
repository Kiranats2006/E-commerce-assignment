const express = require('express');
const router = express.Router();
const verifyToken  = require('../middleware/jwt-verify');
// POST - /confirm-order {addrss, items, totalAmount}
router.post('/confirm-order', verifyToken /* controller */);
module.exports = router;