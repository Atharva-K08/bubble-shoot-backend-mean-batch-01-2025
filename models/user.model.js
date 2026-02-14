const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel; 
// (userModel.create, findOne, find, findOneAndUpdate, findOneAndDelete, findById, findByIdAndUpdate, findByIdAndDelete)
