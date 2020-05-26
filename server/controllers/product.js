const Product = require("../models/Product");

var products = [
    // summer 
    new Product({
        category: "summer",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "summer",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "summer",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "summer",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    // street
    new Product({
        category: "street",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "street",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "street",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "street",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    // formal
    new Product({
        category: "formal",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "formal",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "formal",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "formal",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    // party
    new Product({
        category: "party",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "party",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "party",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
    new Product({
        category: "party",
        imagePath: "",
        brand: "",
        description: "",
        price: "",
        inventory: 
        {
        size: "",
        quantity: ""
        }
    }),
]
// loops through and store products
for (var i = 0; i < products.length; i++) {
    products[i].save();
}