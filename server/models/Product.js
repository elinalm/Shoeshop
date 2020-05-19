const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  size: Number,
  price: Number,
  gender: String,
  description: String, 
  amount: Number, 
  img: String,
});

module.exports = mongoose.model("Products", ProductSchema);
