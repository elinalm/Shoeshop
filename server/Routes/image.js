const express = require('express');
const fs = require('fs');
const router = express.Router();
const fileUpload = require('express-fileupload');
const ImageController = require('../controllers/image')
router.use(express.json());
router.use(fileUpload());

router.post('/', ImageController.add_image)

router.get('/:id', ImageController.get_image)

module.exports = router;