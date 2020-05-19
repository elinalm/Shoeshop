const express = require("express");
// const Game = require("../models/Game");
// const GameResult = require("../models/Gameresult");
const router = express.Router();
const restricted = require("./restricted");
const Product = require("../models/Product");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
});


// Post new result
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product({
        category:  req.body.category,
        size: req.body.size,
        price: req.body.price,
        gender: req.body.gender,
        description : req.body.description,
        amount : req.body.amount, 
        img : req.body.img
    });
    const newResult = await newProduct.save();
    res.status(200).json(newResult);
  } catch (err) {
    res.status(400).json(err);
  }
});

// //Update result
// router.put("/:id", restricted, async (req, res) => {
//   try {
//     const game = await GameResult.findOne({ _id: req.params.id });

//     game.goals = req.body.goals;
//     game.assists = req.body.assists;
//     game.penalties = req.body.penalties;

//     await game.save();

//     res.json(game);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//Delete result
router.delete("/:id", restricted, async (req, res) => {
  try {
    await GameResult.deleteOne({ _id: req.params.id });
    res.status(200).send("Results deleted");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
