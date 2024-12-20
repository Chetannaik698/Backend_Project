const mongoose = require('mongoose');
const { type } = require('../schema');
const { ref } = require('joi');
const Schema = mongoose.Schema;
const Review = require('./review')

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    image: {
       url:String,
       filename: String
    },
    price: Number,
    location: String,
    country: String,

    //now we attaching review model here
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}})
    }
}) // whan we delete listing this middle ware will delete that added reviews in the database

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing