const mongoose = require("mongoose");

const ShippingSchema = mongoose.Schema({
    company: String, 
    price: Number, 
    deliveryDays: Number, 
});

module.exports = mongoose.model("Shippings", ShippingSchema);
