const express = require('express');
const router = express.Router();
const { isLogedIn, isOwner } = require('../middleware'); // Import middleware correctly
const Listing = require('../models/listing');
const wrapAsync = require('../utils/wrapAsync'); // Ensure wrapAsync is correctly defined
const { listingSchema } = require('../schema');
const Review = require('../models/review');

// Index route (show all listings)
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

// New route (create new listing)
router.get("/new", isLogedIn, wrapAsync(async (req, res) => {
    res.render("listings/new");
}));

// Show route (view a single listing)
router.get("/:id", wrapAsync(async (req, res, next) => {
    const listing = await Listing.findById(req.params.id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
                select: "username", // Nested populate to show the author's username in reviews
            }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    res.render("listings/show", { listing });
}));


// Create route (add new listing to the database)
router.post("/", wrapAsync(async (req, res) => {
    const { title, description, price, country, location, image } = req.body;
    const createdListing = new Listing({
        title:title,
        description:description,
        price:price,
        country:country,
        location:location,
        image:image.url,
        owner: req.user._id,
    });
    await createdListing.save();
    req.flash("success", "New listing created!");
    res.redirect("/listings");
}));

// Edit route (show edit form for a listing)
router.get("/:id/edit", isLogedIn, isOwner, wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    res.render("listings/edit", { listing });
}));

// Update route (update listing in the database)
router.put("/:id", isLogedIn, isOwner, wrapAsync(async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body);
    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${req.params.id}`);
}));

// Delete route (delete a listing from the database)
router.delete("/:id", isLogedIn, isOwner, wrapAsync(async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted!");
    res.redirect("/listings");
}));

module.exports = router;
