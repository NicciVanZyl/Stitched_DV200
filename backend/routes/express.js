const express = require('express');
const router = express.Router();
const FlaggedItem = require('../models/FlaggedItem'); // Adjust to match your Mongoose model path

// GET: Fetch all flagged items to display on the dashboard
router.get('/api/flags', async (req, res) => {
  try {
    // Assuming you only want to show active flags, not dismissed ones
    const flags = await FlaggedItem.find({ status: { $ne: 'dismissed' } }); 
    res.status(200).json(flags);
  } catch (error) {
    res.status(500).json({ message: "Error fetching database items", error });
  }
});

// PATCH: Update an item (e.g., Dismiss it)
router.patch('/api/flags/:id', async (req, res) => {
  try {
    const updatedItem = await FlaggedItem.findByIdAndUpdate(
      req.params.id, 
      { status: req.body.status }, 
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating item", error });
  }
});

// DELETE: Completely remove an item from the database
router.delete('/api/flags/:id', async (req, res) => {
  try {
    await FlaggedItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item", error });
  }
});

module.exports = router;