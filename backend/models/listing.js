const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: String, required: true },
        description: { type: String, required: true },
        size: { type: String },
        isActive: { type: Boolean, default: false },
        customerID: { type: String, required: true },
        likes: { type: String, default: 0 },
    },
);

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;