const mongoose = require('mongoose');
const { ProductSchema } = require('./Product')

const Address = mongoose.Schema({
  streetAddress:{type: String, required: true},
  postalCode: {type: Number, required: true},
  city: {type: String, required: true}
})

const OrderSchema = mongoose.Schema({
  productRows: [
    {
      product: {
        type: ProductSchema,
      },
      items: [{
        size: {type: Number, required: true},
        quantity:{type: Number, required: true},
      }],
    }
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    required: true
  },
  shipping: {
    type: mongoose.Types.ObjectId,
    ref: "Shippings",
    required: true
  },
  payment: {
    type: String,
    required: true
  },
  delivered: {
    type: Boolean,
    default: false,
  },
  date:{type: Date, required: true},
  address: {
    type: Address,
    required: true
  }
});



module.exports = mongoose.model("Orders", OrderSchema);
