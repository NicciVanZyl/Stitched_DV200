const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: String, required: true },
    description: { type: String, required: true, maxlength: 800, trim: true },
    size: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    isSold: { type: Boolean, default: false },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    userRating: { type: String, default: 0 },
  },
  { timestamps: true },
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
