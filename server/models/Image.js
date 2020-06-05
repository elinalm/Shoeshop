const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    data: { type: Buffer, require: true },
    contentType: { type: String, require: true },
    name: { type: String, require: false }
})


module.exports = mongoose.model("Image", ImageSchema);