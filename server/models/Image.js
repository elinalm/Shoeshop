const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    img:  { data: Buffer, contentType: String}
    // reference to productId
})

module.exports = mongoose.model("Image", ImageSchema);