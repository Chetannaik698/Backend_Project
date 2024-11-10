const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: { type: String },
        url: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmJ3ymPIMejOylqT8jBFrSZW2IHopkXctTg&s" }
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing