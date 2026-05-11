const mongoose = require('mongoose');

const flagSchema = new mongoose.Schema(
    {
        reason: { type: String, required: true },
        listingId: { type: String, required: true },
        flagBody: { type: String, required: true }
    },
);

const Flag = mongoose.model('Flag', flagSchema);
module.exports = Flag;