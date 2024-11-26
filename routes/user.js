const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { savedRedirectUrl } = require('../middleware.js'); // Use destructuring for consistency

// Render signup form
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

// Handle signup POST request
router.post("/signup", async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password); // Register user and hash password
        
        // Automatically log in the user after successful registration
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "User registered successfully!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message); // Display any error during registration
        res.redirect("/signup");
    }
});

// Render login form
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

// Handle login POST request
router.post(
    "/login",
    savedRedirectUrl, // Middleware for redirect URL after login
    passport.authenticate("local", {
        failureRedirect: "/login", // Redirect back to login form on failure
        failureFlash: true // Show flash message for failure
    }),
    async (req, res) => {
        req.flash("success", "Welcome back to Wonderlust!");
        const redirectUrl = res.locals.redirectUrl || "/listings"; // Use saved redirect URL or default
        res.redirect(redirectUrl);
    }
);

// Handle logout
router.get("/logout", (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out now");
        res.redirect("/listings");
    });
});

module.exports = router;
