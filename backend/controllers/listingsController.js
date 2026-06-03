const Listing = require("../models/listing");
const cloudinary = require("../routes/cloudinary");

// Add a new listing
const AddListing = async (req, res) => {
  try {
    const newListing = new Listing({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      size: req.body.size,
      imageUrl: req.body.ImgUrl,
      category: req.body.category,
      subCategory: req.body.subCategory,
      isActive: false,
      isSold: false,
      postedBy: req.body.userId,
    });
    const saved = await newListing.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const UploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file provided" });
    }

    // Convert buffer to base64 data URL
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = "data:" + req.file.mimetype + ";base64," + b64;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "stiched_listings",
    });

    res.status(200).json({
      imageUrl: result.secure_url,
      publicId: result.public_id,
      message: "Image uploaded successfully",
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ message: error.message || "Image upload failed" });
  }
};

// Get all listings
const GetAllListing = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific listing
const GetListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Listings that have to be approved
const GetAwaitingApproval = async (req, res) => {
  try {
    const listings = await Listing.find({ isActive: false });
    console.log(listings);

    if (!listings) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Listings that have been approved
const GetApproved = async (req, res) => {
  try {
    const listings = await Listing.find({ isActive: true });
    console.log(listings);

    if (!listings) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update Listing
const UpdateListing = async (req, res) => {
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
};

const ListingSold = async (req, res) => {
  try {
    const soldListing = await Listing.findById(req.params.id);
    if (!soldListing)
      return res.status(404).json({ message: "Listing not found" });
    await soldListing.save();
    res.status(200).json(soldListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const ApproveListing = async (req, res) => {
  try {
    const approvedListing = await Listing.findById(req.params.id);
    if (!approvedListing)
      return res.status(404).json({ message: "Listing not found" });
    await approvedListing.save();
    res.status(200).json(approvedListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const GetPrevious = async (req, res) => {
  try {
    const previousListing = await Listing.find({
      postedBy: req.params.id,
      isSold: true,
    });
    if (!previousListing)
      return res.status(404).json({ message: "Listing not found" });
    res.status(200).json(previousListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const GetActive = async (req, res) => {
  try {
    const activeListing = await Listing.find({
      postedBy: req.params.id,
      isSold: false,
      isActive: true,
    });
    if (!activeListing)
      return res.status(404).json({ message: "Listing not found" });
    res.status(200).json(activeListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const ToggleLike = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: "Listing not found" });

    const userId = req.user._id.toString();
    const alreadyLiked = listing.likes
      .map((id) => id.toString())
      .includes(userId);

    if (alreadyLiked) {
      listing.likes = listing.likes.filter((id) => id.toString() !== userId);
    } else {
      listing.likes.push(req.user._id);
    }

    await listing.save();

    res.status(200).json({
      status: "success",
      data: { likes: listing.likes.length, liked: !alreadyLiked },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const GetLikedListings = async (req, res) => {
  try {
    const listings = await Listing.find({ likes: req.user._id });
    if (!listings)
      return res.status(404).json({ message: "No listings found" });

    res.status(200).json({
      status: "success",
      data: { listings },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Listing
const DeleteListing = async (req, res) => {
  try {
    const deletedListing = await Listing.findByIdAndDelete(req.params.id);

    if (!deletedListing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  AddListing,
  GetAllListing,
  GetListing,
  UpdateListing,
  ListingSold,
  ApproveListing,
  ToggleLike,
  GetLikedListings,
  DeleteListing,
  UploadImage,
  GetAwaitingApproval,
  GetApproved,
  GetPrevious,
  GetActive,
};
