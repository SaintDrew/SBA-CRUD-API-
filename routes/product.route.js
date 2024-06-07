const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct} = require('../controllers/product.controller');


router.get('/', getProducts);
router.get("/:id", getProduct);

router.post("/", createProduct);

// updating a product
router.put("/:id", updateProduct);

// deleting a product
router.delete("/:id", deleteProduct);


module.exports = router;