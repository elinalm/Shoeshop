const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  size: Number,
  quantity: {
    type: Number,
    min: 0,
    max:50
  }
},
  { _id: false })

  function capitalize(val) {

    return val.toLowerCase()
  }

const ProductSchema = mongoose.Schema({
  brand: String,
  price: Number,
  category: {
    type: [{type: String, set: capitalize, enum:['summer', 'street', 'formal', 'party']}],
  },
  description: String,
  inventory: [inventorySchema],
  img: String,
},
  { versionKey: false });

module.exports = mongoose.model("Products", ProductSchema);

