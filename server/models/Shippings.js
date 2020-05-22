const mongoose = require("mongoose");


const ShippingsSchema = mongoose.Schema({
  price: Number,
  company: String,
  deliveryDays: Number
});

module.exports = mongoose.model("Shippings", ShippingsSchema);
