const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    name: { type: String, required: false }
})


module.exports = mongoose.model("Image", ImageSchema);