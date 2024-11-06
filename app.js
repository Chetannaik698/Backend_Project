const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing')
const path = require('path')
const methodOveride = require("method-override");
const ejsMate = require("ejs-mate"); //use multiple layout

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOveride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
app.engine('ejs', ejsMate);

main().then(() => {
  console.log("connection successfull")
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

//index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({})
  res.render("listings/index", { allListings });
});

//new route
app.get("/listings/new", (req, res) => { // this route should be at top of show because it may take it as id
   res.render("listings/new.ejs")
});


//show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
  res.render("listings/show.ejs", { listing })
});

//Create route
app.post("/listings", async (req,res) => {
      let { title, description, price, country, location } = req.body;
      const image = {
        url: req.body.image.url,       // Ensure `image.url` is provided in the form
        filename: req.body.image.filename // Ensure `image.filename` is provided in the form
      };
      let createdListing = new Listing({
         title:title,
         description:description,
         image:image,
         price:price,
         country:country,
         location:location,
    });

    createdListing.save()
    res.redirect("/listings")
});

//edit route
app.get("/listings/:id/edit", async (req,res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
  res.render("listings/edit.ejs", { listing })
});

app.put("/listings/:id", async(req,res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, req.body); 
  res.redirect(`/listings/${id}`) //redirect to show route
});

//delete route
app.delete("/listings/:id", async (req,res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id)
  console.log(deletedListing)
  res.redirect("/listings");
});

app.get("/", (req,res) => {
  res.send("Hi, iam home");
})

app.listen(8080, () => {
  console.log("Listining to the port 8080")
})