const express = require("express");
const Image = require("../models/Image")
// const multer = require('multer')
const router = express.Router();
// const fileUpload = require(express-fileUpload)



// const upload = multer({ dest: 'rest/' })


// const fs = require('fs');

// router.post('/', upload.single('test'), function (req, res, next) {
//     console.log("image", req)
//   })

// router.post("/", fileUpload(), (req, res) => {
//   console.log(req.files);
//   res.json("success")
  
// })

module.exports = router;