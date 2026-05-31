const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        commentBody: { type: String, required: true, maxlength: 300, minlength: 1, trim: true },
        customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        customerName: { type: String, required: true},
        sellerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        rating: { type: String, required: true }
    },
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;