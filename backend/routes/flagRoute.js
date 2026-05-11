const express = require('express');
const router = express.Router();
const Flag = require ('../models/flags');


//add new flag
router.post('/', async (req, res) => {
   try {
    const newFlag = new Flag (req.body);
    const saved = await newFlag.save();

    res.status(201).json(saved);
}catch (error) {
    res.status(400).json({ message: error.message });
}
});

//Get all flags 

router.get('/', async (req, res) => {
    try {
        const flags = await Flag.find();
        res.status(200).json(flags);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Edit flag

router.put('/:id', async (req, res) => {
    try {
        const updatedFlag = await Flag.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true });

        if (!updatedFlag) {
            return res.status(404).json({ message: 'Flag not found' });
        }
        res.status(200).json(updatedFlag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete flag

router.delete('/:id', async (req, res) => {
    try {
        const deletedFlag = await Flag.findByIdAndDelete(req.params.id);

        if (!deletedFlag) {
            return res.status(404).json({ message: 'Flag not found' });
        }

        res.status(200).json({ message: 'Flag deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;