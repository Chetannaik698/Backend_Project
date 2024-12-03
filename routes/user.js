const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { savedRedirectUrl } = require('../middleware.js'); // Use destructuring for consistency
const Usercontroller = require("../controllers/users.js")
const wrapAsync = require('../utils/wrapAsync');

//handle signup
router.route("/signup")
.get(Usercontroller.renderSignup)
.post(wrapAsync(Usercontroller.signup));

//handle login
router.route("/login")
.get( Usercontroller.renderLogin)
.post(
    savedRedirectUrl, // Middleware for redirect URL after login
    passport.authenticate("local", {
        failureRedirect: "/login", // Redirect back to login form on failure
        failureFlash: true // Show flash message for failure
    }),
    Usercontroller.login
);

// Handle logout
router.get("/logout", Usercontroller.logout);

module.exports = router;
