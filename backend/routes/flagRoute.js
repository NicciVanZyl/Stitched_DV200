const express = require('express');
const router = express.Router();
const { AddFlag, GetAllFlags, EditFlag, DeleteFlag } = require('../controllers/flagsController')
const verifyToken = require('../middleware/verifyToken');
const requireAdmin = require('../middleware/requireAdmin');

//add new flag
router.post('/add', verifyToken,AddFlag);

//Get all flags 

router.get('/all', verifyToken,requireAdmin,GetAllFlags);

//Edit flag

router.patch('/:id', verifyToken, requireAdmin,EditFlag);

//Delete flag

router.delete('/:id', verifyToken,requireAdmin,DeleteFlag);

module.exports = router;