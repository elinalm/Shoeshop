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
    console.log(req.files)
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let imgPath = req.files.imgPath;
         
            var a = new Image;
            a.img.data = req.files.imgPath.data; //fs.readFileSync('./Routes/uploads/' + await imgPath.name);
            a.img.contentType = 'image/png';
            a.save(function (err, a) {
                if (err) throw err;
                console.error('saved img to mongo');})

        }
    }
     catch (err) {
        res.status(500).send(err);
    }
});


router.get('/:id', function (req, res, next) {
    Image.findById(req.params.id, function (err, doc) {
        if (err) return next(err);
        res.contentType(doc.img.contentType);
        res.send(doc.img.data);
    });
});
module.exports = router;