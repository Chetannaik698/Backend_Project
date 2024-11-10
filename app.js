const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing')
const path = require('path')
const methodOveride = require("method-override");
const ejsMate = require("ejs-mate"); //use multiple layout
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressErr.js");
const { listingSchema } = require("./schema.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOveride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine('ejs', ejsMate);

const validateListing = (req, res, next) => {
  let err = listingSchema.validate(req.body) // if req.body is satisfying all that required conditon in schem li title description etc
  console.log(result)

  if (errr) {
    throw new ExpressError(400, result.err)
  } else {
    next()
  }

}

main().then(() => {
  console.log("connection successfull")
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

//index route
app.get("/listings", validateListing, wrapAsync(async (req, res) => {
  const allListings = await Listing.find({})
  res.render("listings/index", { allListings });
}));


//new route
app.get("/listings/new", (req, res) => { // this route should be at top of show because it may take it as id
  res.render("listings/new.ejs")
});


//show route
app.get("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
  res.render("listings/show.ejs", { listing })
}));

// Create route
app.post("/listings", wrapAsync(async (req, res, next) => {

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
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
  res.render("listings/edit.ejs", { listing })
}));

app.put("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, req.body);
  res.redirect(`/listings/${id}`) //redirect to show route
}));

//delete route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id)
  console.log(deletedListing)
  res.redirect("/listings");
}));

app.get("/", (req, res) => {
  res.send("Hi, iam home");
})

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
})

//handling custom erors
app.use((err, req, res, next) => {
  let { status = 500, message = "Some thing went wrong" } = err
  res.render("listings/error.ejs", { err });
})


app.listen(8080, () => {
  console.log("Listining to the port 8080")
})