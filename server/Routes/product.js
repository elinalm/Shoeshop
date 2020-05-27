const express = require("express");
const router = express.Router();
const adminCheck = require("./admin");
const ProductController = require('../controllers/product')

router.use(express.json());

//Get all categories
router.get("/categories", ProductController.get_all_categories);

//Get all products
router.get("/", ProductController.get_all_products);

//Get products of a particular Category
router.get("/:category", ProductController.get_filtered_products);

// Post new product
router.post("/",adminCheck, ProductController.post_new_product);

//Update product
router.put("/",adminCheck, ProductController.update_product);

//To be deleted ...........
router.put("/:id/:size", ProductController.update_inventory);

//Delete product
router.delete("/:id",adminCheck, ProductController.delete_product);

module.exports = router;
