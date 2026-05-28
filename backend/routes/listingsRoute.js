const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

//Cloudinary for img upload
const storage = new CloudinaryStorage({
  cloudinary,
  params: { folder: "listings" },
});

const upload = multer({ storage });

router.post("/image", upload.single("image"), async (req, res) => {
  try {
    const imageUrl = req.file.path;
    console.log(req.file);
    res.json({ success: true, imageUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Add new listing
router.post("/add", async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    const saved = await newListing.save();

    res.status(201).json(saved);
  } catch (error) {
    console.error("Error adding listing:", error);
    res.status(500).json({ message: error.message });
  }
});

//Get all listings
router.get("/all", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get a specific listing
router.get("/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update Listing
router.put("/:id", async (req, res) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedListing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json(updatedListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete Listing
router.delete("/:id", async (req, res) => {
  try {
    const deletedListing = await Listing.findByIdAndDelete(req.params.id);

    if (!deletedListing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
