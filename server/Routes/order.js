const express = require("express");
const Order = require("../models/Order");
const router = express.Router();
 

router.use(express.json());

router.get("/order/", async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post("/order/"), async (req, res) => {
//     res.send("post")
// }