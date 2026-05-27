const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        dateOfBirth: { type: String, },
        password: { type: String, },
        address: { type: String, },
        number: { type: String, },
        likedListings: { type: Array, },
        rating: { type: String, default: 0 },
        isAdmin: { type: Boolean, default: false },
        creativePassword: { type: String, required: true }
    },
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
