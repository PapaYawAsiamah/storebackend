const express = require("express");

const productController = require("../product/controllers/getproduct");

const router = express.Router();

router.post("/products", productController.createProduct)
router.get("/products", productController.getProducts);

module.exports = router;
