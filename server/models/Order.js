const mongoose = require('mongoose');

const Address = mongoose.Schema({
  streetAddress: String,
  postalCode: Number,
  city: String
})

const OrderSchema = mongoose.Schema({
  productRows: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      },
      price: Number,
      items: [{
        size: Number,
        quantity: Number,
      }],
    }
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
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
  date: Date,
  address: Address
});



module.exports = mongoose.model("Orders", OrderSchema);
