const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // dateOfBirth: { type: String, required: true },
  password: { type: String, required: true },
  // address: { type: String, required: true },
  // number: { type: String, required: true },
  // likedListings: { type: Array, required: true },
  // rating: { type: Float, default: 0 }
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
