const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  totalPrice: Number,
  quantity: Number, 
  payment: String, 
  date: String,
});

module.exports = mongoose.model("order", OrderSchema);