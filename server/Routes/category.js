const express = require("express");
const Category = require("../models/Category");
const router = express.Router();
 

router.use(express.json());

//Find all results
router.get("/", async (req, res) => {
  try {
    const categorys = await Category.find();
    res.status(200).json(categorys);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
