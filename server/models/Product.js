const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  size: Number,
  quantity: Number
},
  { _id: false })

  function capitalize (val) {
    return val.charAt(0).toUpperCase() + val.substring(1);
  }

const ProductSchema = mongoose.Schema({
  brand: String,
  price: Number,
  category: {
    type: [{type: String, set: capitalize}],
  },
  description: String,
  inventory: [inventorySchema],
  img: String,
},
  { versionKey: false });

module.exports = mongoose.model("Products", ProductSchema);

