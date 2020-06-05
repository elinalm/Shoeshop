const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  size: {
    type: Number,
    min: 15,
    max: 48
  },
  quantity: {
    type: Number,
    min: 0,
    max: 50
  }
},
  { _id: false })

function capitalize(val) {
  return val.toLowerCase()
}

const ProductSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: [{ type: String, set: capitalize, enum: ['summer', 'street', 'formal', 'party'] }],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  inventory: [inventorySchema],
  image: {
    type: mongoose.Types.ObjectId,
    required: true,
  }

}, {
  versionKey: false,
  toJSON: {
    virtuals: true
  }
});


ProductSchema.virtual('imageUrl').get(function() {
  return "http://localhost:5000/image/" + this.image.toString()
})


module.exports = mongoose.model("Products", ProductSchema);

