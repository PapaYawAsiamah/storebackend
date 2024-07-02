const express = require("express");

const productController = require("../product/controllers/getproduct");

const router = express.Router();

router.get("/products", productController.getProducts);

module.exports = router;
