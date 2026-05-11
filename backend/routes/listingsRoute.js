const express = require('express');
const router = express.Router();
const Listing = require ('../models/listing');


//add new listing
router.post('/', async (req, res) => {
   try {
    const newListing = new Listing (req.body);
    const saved = await newListing.save();

    res.status(201).json(saved);
}catch (error) {
    res.status(400).json({ message: error.message });
}
});

//get all listings

router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find();
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//get a specific listing

router.get('/:id', async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update Listing

router.put('/:id', async (req, res) => {
    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true });

        if (!updatedListing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json(updatedListing);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete Listing

router.delete('/:id', async (req, res) => {
    try {
        const deletedListing = await Listing.findByIdAndDelete(req.params.id);

        if (!deletedListing) {
            return res.status(404).json({ message: 'Listing not found' });
        }

        res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;