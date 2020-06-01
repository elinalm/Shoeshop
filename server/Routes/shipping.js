const express = require("express");
const router = express.Router();
const adminCheck = require("./admin");
const ShippingController = require('../controllers/shipping')
 
router.use(express.json());

//Find all results
router.get("/", ShippingController.get_all_shipping);

//Add new shipping mode
router.post("/",adminCheck, ShippingController.add_new_shipping );

module.exports = router;
