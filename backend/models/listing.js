const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        price: { type: String, required: true },
        description: { type: String, required: true, maxlength: 800, trim: true },
        size: { type: String, required: true },
        imageUrl: {type: String, required: true},
        isActive: { type: Boolean, default: false },
        customerID: { type: String, required: true },
        isSold:{type: Boolean, default: false },
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true}
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;