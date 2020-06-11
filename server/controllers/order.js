const Order = require("../models/Order");
const { Product } = require("../models/Product");

exports.get_all_orders = async (req, res, next) => {
    try {
        const order = await Order.find().populate("user shipping");
        res.status(200).json(order);
    } catch (err) {
        next(err)
    }
}

exports.create_order = async (req, res, next) => {
    console.log(req.body)
    try {
        // validation on the clientsidan for the client not to se any more products that she can buy
        const products = await Product.find({ _id: req.body.productRows.map(element => element.product) });
        
        console.log('1', products)


        if (products) {
            for (const product of req.body.productRows) {
                
                for (const item of product.items) { // inside of the function 
                    
                    rmFromInventory(product.product._id, item.size, item.quantity)
                }
            }
        }

        const newOrder = new Order(req.body);
        //console.log(newOrder)
        const newResult = await newOrder.save();
        res.status(200).json(newResult);
        // rmFromInventory()
        //console.log("En order har lagts");

    } catch (err) {
        next(err)
    }
}



exports.change_order_status = async (req, res, next) => {
    console.log(" orderId status", req.params.id, req.params.status)
    try {
        const order = await Order.findOne({ _id: req.params.id }

        )
        order.delivered = true

        order.save()

        res.status(200).json(order);
    } catch (err) {
        next(err)
    }
}

exports.get_user_order = async (req, res, next) => {
    try {
        const order = await Order.find({ user: req.params.id }).populate("user shipping")
        res.status(200).json(order);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function rmFromInventory(id, size, quantity) {
    try {
        console.log(quantity, id,  '2')
        const product = await Product.findOne({ _id: id });
        console.log(product, '3')
        const inventories = product.inventory
        for (const inventory of inventories) {
            if (inventory.size == size) {
                inventory.quantity -= quantity
                
            }
        }
        await product.save();
    } catch (err) {
        next(err)
    }
}

