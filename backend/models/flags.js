const mongoose = require('mongoose');

const flagSchema = new mongoose.Schema(
    {
        reason: { type: Array, required: true },
        listingId: { type: String, required: true },
        flagBody: { type: String, required: true, maxlength: 1000 }
    },
);

const Flag = mongoose.model('Flag', flagSchema);
module.exports = Flag;