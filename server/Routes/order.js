const express = require("express");
const Order = require("../models/Order");
const Product = require("../models/Product");
const router = express.Router();
 
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const order = await Order.find().populate("product").populate("user").populate("shipping"); 
    res.status(200).json(order);
  } catch (err) { 
    res.status(400).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
    // const product = await Product.findOne({ _id: req.body.productRow.price });
    // product.price = req.body.price,
    // res.json(product);

    
    const newOrder = new Order(req.body);
    const newResult = await newOrder.save();
    res.status(200).json(newResult);
    console.log("En order har lagts");
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id"), async (req, res) => {
  // res.send("order, put")
}

module.exports = router;