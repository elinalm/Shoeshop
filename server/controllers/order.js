const Order = require("../models/Order");
const { Product } = require("../models/Product");

exports.get_all_orders = async (req, res) => {
    try {
        const order = await Order.find().populate("user shipping");
        res.status(200).json(order);
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.create_order = async (req, res) => {
    console.log(req.body)
    try {
        // validation on the clientsidan for the client not to se any more products that she can buy
        const products = await Product.find({ _id: req.body.productRows.map(element => element.product._id) });
        // product.price = req.body.price,

        if (products) {
            for (const product of products) {
                for (const productInventory of product.inventory) { // inside of the function 
                    rmFromInventory(product._id, productInventory.size, productInventory.quantity)
                }

            }
        }

        const newOrder = new Order(req.body);
        console.log(newOrder)
        const newResult = await newOrder.save();
        res.status(200).json(newResult);
        // rmFromInventory()
        console.log("En order har lagts");

    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}



exports.change_order_status = async (req, res) => {
    console.log(" orderId status", req.params.id, req.params.status)
    try {
        const order = await Order.findOne({ _id: req.params.id }

        )
        order.delivered = true

        order.save()

        res.status(200).json(order);
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.get_user_order = async (req, res) => {
    try {
        const order = await Order.find({ user: req.params.id }).populate("user shipping")
        res.status(200).json(order);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function rmFromInventory(id, size, quantity) {
    try {
        const product = await Product.findOne({ _id: id });
        const inventories = product.inventory
        for (const inventory of inventories) {
            if (inventory.size == size) {
                inventory.quantity = quantity
                console.log("match!")
            }
        }
        await product.save();
    } catch (err) {
        console.log(err)
    }
}

