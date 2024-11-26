const express = require('express');
const router = express.Router({mergeParams: true}); //here we merege different params
const { listingSchema, reviewSchema } = require('../schema.js');
const ExpressError = require("../utils/ExpressErr.js");
const wrapAsync = require('../utils/wrapAsync');
const Review = require('../models/review')
const Listing = require('../models/listing');
const { isLogedIn } = require('../middleware.js');
const { isreviewAuthor } = require('../middleware.js');

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
router.post("/", validateReview, isLogedIn, wrapAsync(async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review); // Create a new review
  newReview.author = req.user._id;
  listing.reviews.push(newReview);
  
  await newReview.save();
  await listing.save();
  req.flash("success", "New Review created");
  res.redirect(`/listings/${listing._id}`);
}));


//delete review route
router.delete("/:reviewid", isLogedIn, isreviewAuthor, wrapAsync(async(req,res) => {
  let {id, reviewid} = req.params;
  await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewid}}) //here pull means remove use pdate method and it will delete that reveiw from reviews array from the listing
  await Review.findByIdAndDelete(reviewid); //here we removing the review from the review database
  req.flash("success", "Review Deleted")
  res.redirect(`/listings/${id}`)
}))


module.exports = router;