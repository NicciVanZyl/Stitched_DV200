const express = require("express");
const router = express.Router();
const { RegisterUser, LoginUser, GetUser, UpdateUser, DeleteUser,UpdateRating } = require('../controllers/usersController')
const verifyToken = require('../middleware/verifyToken');
const requireAdmin = require('../middleware/requireAdmin');

//Add new user
router.post("/register", RegisterUser);

//Login user
router.post("/login", LoginUser);

//Get specific user
router.get("/:id", GetUser);

//Update user
router.put("/:id", verifyToken, UpdateUser);

//Update user rating
router.patch("/:id", verifyToken, UpdateRating);

//Delete user
router.delete("/:id", verifyToken, requireAdmin, DeleteUser);

module.exports = router;