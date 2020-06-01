const express = require("express");
const Order = require("../models/Order");
const Product = require("../models/Product");
const router = express.Router();
 
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const order = await Order.find().populate("product", "price").populate("user").populate("shipping"); 
    res.status(200).json(order);
  } catch (err) { 
    res.status(400).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
    // validation on the clientsidan for the client not to se any more products that she can buy
    const products = await Product.find({ _id: req.body.productRows.map(element => element.product._id)});
    // product.price = req.body.price,
    console.log(products, "products");
    
    if(products) {
      for(const product of products) {
        for(const productInventory of product.inventory) { // inside of the function 
          rmFromInventory(product._id, productInventory.size, productInventory.quantity)
        }
       
       }
    }
   
    const newOrder = new Order(req.body);
    const newResult = await newOrder.save();
    res.status(200).json(newResult);
    // rmFromInventory()
    console.log("En order har lagts");
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id"), async (req, res) => {
  // res.send("order, put")
}

async function rmFromInventory(id, size, quantity) {
  try {
    const product = await Product.findOne({ _id: id });
    const inventories = product.inventory
  
   
  for(const inventory of inventories) {
    if(inventory.size == size) {
      inventory.quantity = quantity
      console.log("match!")
    }
  }

   await product.save();

  } catch (err) {
    // res.status(400).json(err);
  }
}

module.exports = router;