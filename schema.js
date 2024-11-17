const Joi = require('joi');

// Listing Schema
const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.object({
            url: Joi.string().required(),       // Assuming image has a nested structure
            filename: Joi.string().required()
        }).required()
    }).required()
});

// Review Schema
const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required(),
        comment: Joi.string().required()
    }).required()
});

// Exporting both schemas as part of an object
module.exports = {
    listingSchema,
    reviewSchema
};
