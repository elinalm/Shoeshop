const express = require("express");
const router = express.Router();
const OrderController = require('../controllers/order')
const adminCheck = require("./admin");
router.use(express.json());

router.get("/", adminCheck, OrderController.get_all_orders);


router.post("/", OrderController.create_order);

router.put("/:id"), async (req, res) => {
  // res.send("order, put")
}



module.exports = router;