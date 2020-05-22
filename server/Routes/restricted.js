const Product = require("../models/Product");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  if (req.method === "PUT" || req.method === "DELETE") {
    const product = await Product.findOne({ _id: req.params.id });

    const user = await User.findOne({ _id: product.user });

    if (
      user.username === req.session.username ||
      req.session.role === "admin"
    ) {
      next();
    } else {
      res.status(401).send("Not authorized man");
    }
  } else if (req.method === "POST") {
    if (req.session) {
      next();
    } else {
      res.status(401).send("Not authorized");
    }
  }
};
