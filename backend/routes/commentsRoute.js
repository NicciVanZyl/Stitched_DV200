const express = require('express');
const router = express.Router();
const {AddComment, GetAllComments,GetSellerComments} = require('../controllers/commentsController')
const verifyToken = require('../middleware/verifyToken');
const requireAdmin = require('../middleware/requireAdmin');

//add new comment
router.post('/add', verifyToken,AddComment);

//get all comments 

router.get('/all', GetAllComments);

//get all comments tied to a specific seller

router.get('/seller/:id', verifyToken,GetSellerComments);

module.exports = router;