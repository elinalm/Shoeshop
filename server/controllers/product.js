const Product = require("../models/Product");

exports.get_all_categories = async (req, res) => {
    try {
        res.status(200).json(Product.schema.path('category').caster.enumValues);
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.get_all_products = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.get_filtered_products = async (req, res) => {
    try {
        const category = await Product.find({ category: req.params.category });
        res.status(200).json(category);
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.post_new_product = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const newResult = await newProduct.save();
        res.status(200).json(newResult);
    } catch (err) {
        res.status(400).json(err);
    }
}
exports.update_product = async (req, res) => {
    try {
        console.log(req.body)
        let product = await Product.findOne({ _id: req.params.id });
        console.log(product.inventory.size)
        Object.keys(item).forEach(function(key) {
            if (req.body[key]) {
              product[key] = req.body[key];
            }
          })
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.delete_product = async (req, res) => {

    try {
        await Product.deleteOne({ _id: req.params.id });
        res.status(200).send("Product deleted");
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.update_inventory = async (req, res) => {

    try {
        const product = await Product.findOne({ _id: req.params.id });
        const sizes = product.inventory
        console.log(req.body.quantity);

        for (const size of sizes) {
            if (size.size == req.params.size) {
                size.quantity = req.body.quantity
                console.log("match!")
            }
        }

        await product.save();

        res.json(product);
    } catch (err) {
        res.status(400).json(err);
    }
}