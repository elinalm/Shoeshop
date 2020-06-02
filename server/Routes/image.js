const express = require("express");
const Image = require("../models/Image")
const multer = require('multer')
const router = express.Router();

const upload = multer({ dest: 'rest/' })


const fs = require('fs');

router.post('/', upload.single('test'), function (req, res, next) {
    console.log("image", req)
  })

module.exports = router;