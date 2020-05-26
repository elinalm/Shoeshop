const mongoose = require('mongoose');

const Adress = mongoose.Schema({
  streetadress: String,
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
  },
  payment: String,
  delivered: {
    type: Boolean, 
    default: false,
  },
  date: Date,
  adress: Adress
});



module.exports = mongoose.model("Orders", OrderSchema);
