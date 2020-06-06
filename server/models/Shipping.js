const mongoose = require("mongoose");

const ShippingSchema = mongoose.Schema({
    company: {type: String, required: true},
    price: {type: Number, required: true}, 
    deliveryDays:{type: Number, required: true}, 
});

module.exports = mongoose.model("Shippings", ShippingSchema);
