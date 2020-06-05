const express = require('express');
const fs = require('fs');
const router = express.Router();
const Image = require('../models/Image')
router.use(express.json());
const fileUpload = require('express-fileupload');
router.use(fileUpload());
// img path
// const imgPath = './Routes/uploads/dhl.png'

//store an img in binary in mongo
// var a = new Image;
// a.img.data = fs.readFileSync(imgPath);
// a.img.contentType = 'image/png';
// a.save(function (err, a) {
//     if (err) throw err;
//     console.error('saved img to mongo');
//     // start a demo server

// });

// router.post('/', (req, res) =>{
//     console.log('req_body', req.body)
//     var a = new Image;
//     a.img.data = req.body
//     a.img.contentType = 'image/png';
//     a.save(function (err, a) {
//         if (err) throw err;
//         console.error('saved img to mongo');
//     });
// });

router.post('/', async (req, res) => {
    console.log('HEEEEREEEE', req.files)

    
    try {
        if (!req.files || !req.files.image) {
            res.send({
                status: false,
                message: 'No file uploaded, also make sure to name the field as "image"'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
         
            var image = new Image({
                data: req.files.image.data, 
                contentType: req.files.image.mimetype,
                name: req.files.image.name
            });

            image.save(function (err, image) {
                if (err) throw err;
                console.error('saved img to mongo');})
                console.log(image._id)
                return res.json(image._id)
        }
    }
     catch (err) {
        res.status(500).send(err);
    }
});


router.get('/:id', function (req, res, next) {
    console.log(req.params.id)
    Image.findById(req.params.id, function (err, doc) {
        if (err) return next(err);
        res.contentType(doc.contentType);
        res.send(doc.data);
    });
});
module.exports = router;