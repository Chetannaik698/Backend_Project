const express = require('express');
const router = express.Router();
const { isLogedIn, isOwner } = require('../middleware'); // Import middleware correctly
const Listing = require('../models/listing');
const wrapAsync = require('../utils/wrapAsync'); // Ensure wrapAsync is correctly defined
const { listingSchema } = require('../schema');
const Review = require('../models/review');
const Listingcontroller = require("../controllers/listings.js")
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage }) //used to save forms file like image

//index and create route are handled here
router.route("/")
.get(wrapAsync(Listingcontroller.index))
.post(
    upload.single('listing[image]'), // Middleware to handle file upload
    wrapAsync(Listingcontroller.createListing) // Handle POST request after the file is uploaded
  );

// New route (create new listing)
router.get("/new", isLogedIn, wrapAsync(Listingcontroller.renderNewForm));

//show, update and delete route are handled here
router.route("/:id")
.get(wrapAsync(Listingcontroller.showListing))
.put(
  isLogedIn,
  isOwner,
  upload.single('listing[image]'), // Same field name here
  wrapAsync(Listingcontroller.updateListing)
)
.delete(isLogedIn, isOwner, wrapAsync(Listingcontroller.deleteListing));


// Edit route (show edit form for a listing)
router.get("/:id/edit", isLogedIn, isOwner, wrapAsync(Listingcontroller.rendereditform));

module.exports = router;
