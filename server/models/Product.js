const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  size: Number,
  quantity: Number
},
{_id: false})

const ProductSchema = mongoose.Schema({
  brand: String,
  price: Number,
  category: [String],
  description: String,
  inventory: [inventorySchema],
  img: String,
},
{ versionKey: false });

module.exports = mongoose.model("Products", ProductSchema);

