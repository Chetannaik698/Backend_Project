const { string } = require('joi');
const mongoose = require('mongoose');
const { type, min, max } = require('../schema');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now() // by defaut create a date
    }

})

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;