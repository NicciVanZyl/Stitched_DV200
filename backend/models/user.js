const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    dateOfBirth: { type: String },
    password: { type: String, required: true, trim: true },
    address: { type: String, trim: true },
    number: { type: String },
    rating: { type: String, default: 0 },
    creativePassword: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true },
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
