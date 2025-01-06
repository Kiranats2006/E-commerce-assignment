// route
const multer = require('multer');
const upload = multer({ dest: './temp-uploads' });
const express = require('express');
const {
  createProductController, getProductController
} = require('../controllers/product.controller.js');
const router = express.Router();

router.post(
  '/create-product',
  upload.array('files', 5),
  createProductController
);
router.get('/',getProductController);

module.exports = router;