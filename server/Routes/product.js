const express = require("express");
const router = express.Router();
const restricted = require("./restricted");
const Product = require("../models/Product");
const adminCheck = require("./admin");

router.use(express.json());

//Get all categories
router.get("/categories", async (req, res) => {
  try {
    res.status(200).json(Product.schema.path('category').caster.enumValues);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get products of a particular Category
router.get("/:category", async (req, res) => {
  try {
    const category = await Product.find({category: req.params.category});
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post new product
router.post("/",adminCheck, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const newResult = await newProduct.save();
    res.status(200).json(newResult);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update product
router.put("/:id",adminCheck,  async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

  product.brand = req.body.brand,
  product.category = req.body.category,
  product.price = req.body.price,
  product.description = req.body.description,
  product.img = req.body.img

    await product.save();

    res.json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id/:size",  async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    const sizes = product.inventory
    console.log(req.body.quantity);
    
  for(const size of sizes) {
    if(size == req.params.size) {
      product.size.quantity = req.body.quantity
      console.log("match!")
    }
  }
  
   await product.save();

    res.json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

// restricted,




//Delete product
router.delete("/:id",adminCheck, async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).send("Product deleted");
  } catch (err) {
    res.status(400).json(err);
  }
});

// restricted,

module.exports = router;
