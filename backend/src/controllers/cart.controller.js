const mongoose = require("mongoose");
const UserModel = require("../models/user.model");
const cartModel = require("../models/cart.model");
async function AddToCartController(req, res) {
  const { productId, quantity } = req.body;
  const userId = req.userId;
  console.log(userId);
  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).send({ message: "Send Valid Product ID" });
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send({ message: "Send Valid User ID" });
    }
    const checkUserPresent = await UserModel.findOne({ _id: userId });
    if (!checkUserPresent) {
      return res.status(401).send({ message: "Un-authorized" });
    }
    const checkIfProdPresent = await cartModel.findOne({
      productId: productId,
    });
    if (checkIfProdPresent) {
      return res
        .status(400)
        .send({ message: "product already present in cart" });
    }
    await cartModel.create({
      productId,
      quantity,
      userId,
    });
    return res
      .status(200)
      .send({ message: "Product Added to Cart", success: true });
  } catch (err) {
    return res.status(500).send({ message: err.message, succes: false });
  }
}
async function getProducts(req, res) {
  const userId = req.userId;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const checkUserPresent = await UserModel.findOne({ _id: userId });
    if (!checkUserPresent) {
      return res.status(401).send({ message: "unoauthorized" });
    }
    const data = await cartModel.find({ userId }).populate('productId');
    return res.status(200).send({
      message: "Data is successfullt fetched",
      succes: true,
      cartData: data,
    });
  } catch (error) {
    return res.status(500).send({ message: err.message, succes: false });
  }
}
module.exports = { AddToCartController, getProducts };
