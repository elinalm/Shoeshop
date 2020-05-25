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
        ref: "Product",
      },
      price: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number
    }
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  shipping: {
    type: mongoose.Types.ObjectId,
    ref: "Shipping",
  },
  payment: String, 
  date: Date,
  adress: Adress
});



module.exports = mongoose.model("Orders", OrderSchema);
