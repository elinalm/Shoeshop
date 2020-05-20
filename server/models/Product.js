const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  inventory: [{
    size: Number, 
    quantity: Number, 
  }],
  brand: String, 
  price: Number,
  category: [String],
  description: String, 
  img: String,
});

module.exports = mongoose.model("Products", ProductSchema);
