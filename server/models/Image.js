const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    img:  { data: Buffer, contentType: String},
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      },
})

module.exports = mongoose.model("Image", ImageSchema);