const express = require('express');
const router = express.Router();
const Comment = require ('../models/comment');


//add new comment
router.post('/', async (req, res) => {
   try {
    const newComment = new Comment (req.body);
    const saved = await newComment.save();

    res.status(201).json(saved);
}catch (error) {
    res.status(400).json({ message: error.message });
}
});

//get all comments 

router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;