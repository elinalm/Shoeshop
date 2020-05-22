const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  brand: String,
  price: Number,
  category: [String],
  description: String,
  inventory: [{
    size: Number,
    quantity: Number,
  }],
  img: String,
  });

// _id: false


module.exports = mongoose.model("Products", ProductSchema);

