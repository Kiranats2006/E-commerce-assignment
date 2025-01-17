const express=require('express');
const verifyUser = require('../middleware/jwt-verify');
const router=express.Router();
const { AddToCartController, getProducts } = require('../controllers/cart.controller');
router.post('/add-to-cart', verifyUser,AddToCartController);
router.get('/get-user-cart-data', verifyUser,getProducts);

module.exports=router;