const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  commentBody: { type: String, required: true },
  customerID: { type: String, required: true },
  rating: { type: String, required: true },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
