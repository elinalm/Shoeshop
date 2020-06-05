const express = require("express");
const router = express.Router();
const OrderController = require('../controllers/order')
const adminCheck = require("./admin");
router.use(express.json());

router.get("/", adminCheck, OrderController.get_all_orders);

router.post("/", OrderController.create_order);//Need a check in the backend to confirm the user is logged in 

router.patch("/:id/:status",adminCheck, OrderController.change_order_status)

router.get("/user/:id", OrderController.get_user_order)//Need a check in the backend to confirm the user is logged in 

module.exports = router;