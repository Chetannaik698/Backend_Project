const express = require('express');
const wrapAsync = require('../utils/wrapAsync');
const router = express.Router();
const { listingSchema, reviewSchema } = require('../schema.js');
const ExpressError = require("../utils/ExpressErr.js");
const Listing = require('../models/listing')

const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body); // Check for validation error
    if (error) {
      const errMsg = error.details.map((el) => el.message).join(", ");
      next(new ExpressError(400, errMsg)); // Forward to error handler
    } else {
      next();
    }
  };

//index route
router.get("/", wrapAsync(async (req, res) => { //validateListing is err meassage created by joi for server side database wrong entry an security
    const allListings = await Listing.find({})
    res.render("listings/index", { allListings });
}));

//new route
router.get("/new", wrapAsync(async(req, res) => { // this route should be at top of show because it may take it as id
    res.render("listings/new.ejs")
}));

//show route
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews") //populated whole erviews in listing populate means showing
    res.render("listings/show.ejs", { listing })
}));

// Create route
router.post("/", wrapAsync(async (req, res, next) => {

    let { title, description, price, country, location } = req.body;
    const image = {
        url: req.body.image.url,       // Ensure `image.url` is provided in the form
        filename: req.body.image.filename // Ensure `image.filename` is provided in the form
    };

    let createdListing = new Listing({
        title: title,
        description: description,
        image: image,
        price: price,
        country: country,
        location: location,
    });
    await createdListing.save();  // Add `await` to ensure saving completes before redirect
    res.redirect("/listings");
}));


//edit route
router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
    res.render("listings/edit.ejs", { listing })
}));

router.put("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body);
    res.redirect(`/listings/${id}`) //redirect to show route
}));

//delete route
router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id)
    console.log(deletedListing)
    res.redirect("/listings");
}));

module.exports = router;