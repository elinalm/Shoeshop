const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "customer"
  }

},
{ versionKey: false });

module.exports = mongoose.model("Users", UserSchema);
