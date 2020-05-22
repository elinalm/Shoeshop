const express = require("express");
const router = express.Router();
const restricted = require("./restricted");
const Product = require("../models/Product");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
});




// Post new product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product({
      brand: req.body.brand,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      inventory: {
        size: req.body.inventory.size,
        quantity: req.body.inventory.quantity,
      },
      img: req.body.img
    });
    const newResult = await newProduct.save();
    res.status(200).json(newResult);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update product
router.put("/:id",  async (req, res) => {
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
router.delete("/:id", async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).send("Product deleted");
  } catch (err) {
    res.status(400).json(err);
  }
});

// restricted,

module.exports = router;
