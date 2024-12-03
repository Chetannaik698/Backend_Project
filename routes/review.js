const express = require('express');
const router = express.Router({mergeParams: true}); //here we merege different params
const { listingSchema, reviewSchema } = require('../schema.js');
const ExpressError = require("../utils/ExpressErr.js");
const wrapAsync = require('../utils/wrapAsync');
const Review = require('../models/review')
const Listing = require('../models/listing');
const { isLogedIn } = require('../middleware.js');
const { isreviewAuthor } = require('../middleware.js');
const Reviewcontroller = require("../controllers/reviews.js")

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body); // Check for validation error
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(", ");
    next(new ExpressError(400, errMsg)); // Forward to error handler
  } else {
    next();
  }
};
  
//reviews
//Post review route
router.post("/", validateReview, isLogedIn, wrapAsync(Reviewcontroller.createReview));


//delete review route
router.delete("/:reviewid", isLogedIn, isreviewAuthor, wrapAsync(Reviewcontroller.deleteReview))


module.exports = router;