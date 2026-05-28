const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  size: { type: String },
  isActive: { type: Boolean, default: false },
  customerID: { type: String },
  isSold: { type: Boolean, default: false },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  imageUrl: { type: String },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
