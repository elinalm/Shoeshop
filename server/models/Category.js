const mongoose = require("mongoose");

const ShippingSchema = mongoose.Schema({
    title: String
});

module.exports = mongoose.model("Shippings", CategorySchema);
