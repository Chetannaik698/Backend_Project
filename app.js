const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const path = require('path')
const methodOveride = require("method-override");
const ejsMate = require("ejs-mate"); //use multiple layout
const ExpressError = require("./utils/ExpressErr.js");


const listings = require("./routes/listing.js")
const reviews = require('./routes/review.js')


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOveride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine('ejs', ejsMate);

main().then(() => {
  console.log("connection successfull")
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.use("/listings", listings) //here we are using our listing by requiring it
app.use("/listings/:id/reviews", reviews)


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
  console.log("Listening on port 3000");
});
