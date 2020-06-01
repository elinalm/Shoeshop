const Shipping = require("../models/Shipping");

exports.get_all_shipping = async (req, res) => {
    try {
      const shippings = await Shipping.find();
      res.status(200).json(shippings);
    } catch (err) {
      res.status(400).json(err);
    }
  }

exports.add_new_shipping = async (req, res) => {
    try {
      const newShipping = new Shipping(req.body);
      const newResult = await newShipping.save();
      res.status(200).json(newResult);
    } catch (err) {
      res.status(400).json(err);
    }
  }