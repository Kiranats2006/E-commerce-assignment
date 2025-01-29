const express = require("express");
const multer = require("multer");
// const upload = require('../middlewares/multer.js');
const {
  CreateUSer,
  verifyUserController,
  signup,
  login,
  getUSerData,
  addAddressController,
  getAddressController
} = require("../controllers/user.controller.js");
const jwt = require("jsonwebtoken");
const verifyUser = require('../middleware/jwt-verify.js');
const upload = multer({ dest: "temp-uploads/" });
const router = express.Router();

router.post("/create-user", upload.single("file"), CreateUSer);
router.get("/activation/:token", verifyUserController);

router.post("/signup", upload.single("file"), signup);
router.post("/login", login);

router.get('/user-data', verifyUser, getUSerData);
router.post('/add-address', verifyUser, addAddressController);
router.get('/get-addresses', verifyUser, getAddressController)

module.exports = router;