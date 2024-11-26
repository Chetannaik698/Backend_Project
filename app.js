const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const methodOveride = require("method-override");
const ejsMate = require("ejs-mate"); //use multiple layout
const ExpressError = require("./utils/ExpressErr.js");
const session = require('express-session')
const flash = require('connect-flash');
const passport = require("passport");
const LocalStrategy = require("passport-local")
const User = require("./models/user.js");
const listingsRouter = require("./routes/listing.js")
const reviewsRouter = require('./routes/review.js')
const userRouter = require("./routes/user.js")

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

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  Cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // number of mili sendnds or tme how much time after our cookie will expire
    maxAge: + 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};


app.get("/", (req, res) => {
  res.send("Hi, iam home");
})

app.use(session(sessionOptions))
app.use(flash())

//Authonitatkaion of signup and login starts after session and flash
app.use(passport.initialize())
app.use(passport.session()) //one user logins only one time so no nedd to login agina and agin so we used session here
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user; //created new varibale to send it in to navabar.ejs
  // console.log(res.locals.success);
  next()
})

// //email and pass route
// app.get("/demouser", async(req,res) => {
//   let fakeUser = new User({
//      email: "student@gmail.com",
//      username: "delta-student" //passport local will add by default username and passwod
//   });
//   let registeredUser = await User.register(fakeUser, "hellowrld") //it is passworld => hellworld
//   res.send(registeredUser)
// })

app.use("/listings", listingsRouter) //here we are using our listing by requiring it
app.use("/listings/:id/reviews", reviewsRouter)
app.use("/", userRouter)

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
