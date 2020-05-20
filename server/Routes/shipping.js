const express = require("express");
const Shipping = require("../models/Shipping");
const router = express.Router();
 

router.use(express.json());

//Find all results
router.get("/", async (req, res) => {
  try {
    const shippings = await Shipping.find();
    res.status(200).json(shippings);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
