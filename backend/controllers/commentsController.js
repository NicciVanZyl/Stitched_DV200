const express = require('express');
const router = express.Router();
const Comment = require ('../models/comment');


//Add new comment
exports.AddComment = async (req, res) => {
   try {
    const newComment = new Comment (req.body);
    const saved = await newComment.save();

    res.status(201).json(saved);
}catch (error) {
    res.status(400).json({ message: error.message });
}
};

//Get all comments 
exports.GetAllComments =  async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Get all comments tied to a specific seller
exports.GetAllSellerComments = async (req, res) => {
    try {
        const comments = await Comment.find({"sellerID":req.params.id})
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = router;