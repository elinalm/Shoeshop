const Shipping = require("../models/Shipping");

exports.get_all_shipping = async (req, res, next) => {
    try {
      const shippings = await Shipping.find();
      res.status(200).json(shippings);
    } catch (err) {
      next(err)
    }
  }

exports.add_new_shipping = async (req, res, next) => {
    try {
      const newShipping = new Shipping(req.body);
      const newResult = await newShipping.save();
      res.status(200).json(newResult);
    } catch (err) {
      next(err)
    }
  }