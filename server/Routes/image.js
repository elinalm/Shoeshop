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
    
    // module.exports = (image) => {
        //     return new Promise(function (resolve, reject) {
            
            try {
                console.log('HEEEEREEEE')
        if (!req.files || !req.files.image) {
          console.log('23');
          
            res.send({
                status: false,
                message: 'No file uploaded, also make sure to name the field as "image"'
            });
        } else {
        console.log('564654');
        
            const a = new Image({
                data: req.files.image.data, 
                contentType: req.files.image.mimetype,
                name: req.files.image.name,

            });

            a.save((err, a) => {
                console.log('45');
                
                if(err) throw err;
                console.error('saved img to mongo')
                res.json(a)
            //  res.status(200).send("test")
        })
        // return resolve({
        //     id: image._id
            
        // })
    }}
     catch (err) {
        res.status(500).send(err);
    
        }
    })


router.get('/:id', function (req, res, next) {
    console.log(req.params.id)
    Image.findById(req.params.id, function (err, doc) {
        if (err) return next(err);
        res.contentType(doc.contentType);
        res.send(doc.data);
    });
});
module.exports = router;