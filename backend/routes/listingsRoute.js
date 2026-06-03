const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
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
} = require("../controllers/listingsController");
const verifyToken = require("../middleware/verifyToken");
const requireAdmin = require("../middleware/requireAdmin");

// Setup multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

//upload image
router.post("/image", upload.single("image"), UploadImage);

//add new listing
router.post("/add", verifyToken, AddListing);

//get all listings
router.get("/all", GetAllListing);

//get all listings
router.get("/approved", GetApproved);

//get listings awaiting approval - Admin Display
router.get("/awaitingApproval", verifyToken, requireAdmin, GetAwaitingApproval);

//get user's liked listings
router.get("/getUserLikes", verifyToken, GetLikedListings);

//get previous listings
router.get("/previous/:id", verifyToken, GetPrevious);

//get active listings
router.get("/active/:id", verifyToken, GetActive);

//get a specific listing
router.get("/:id", GetListing);

//add/remove likes
router.patch("/:id", verifyToken, ToggleLike);

//Approve listing - Admin
router.patch("/:id", verifyToken, requireAdmin, ApproveListing);

//Mark as sold - after cart
router.patch("/:id", verifyToken, ListingSold);

//Update Listing - only if not sold or if admin wants to update it
router.put("/:id", verifyToken, UpdateListing);

//Delete Listing - if not sold or if admin wants to remove it
router.delete("/:id", verifyToken, DeleteListing);

module.exports = router;
