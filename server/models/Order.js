const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'Users',
	},
	shipping: {
		type: mongoose.Types.ObjectId,
		ref: 'Shippings',
	},
	productRows: [{
			product: { type: mongoose.Types.ObjectId, ref: 'Products' },
			price: Number,
			quantity: Number,
		},
	],
	totalPrice: Number,
	payment: String,
  address: {
    streetAddress: String,
    postalCode: Number, 
    city: String,
  }, 
},{ timestamps: true });

module.exports = mongoose.model('Orders', OrderSchema);