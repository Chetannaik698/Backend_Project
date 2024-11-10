const Joi = require('joi');

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),         // Added parentheses
        description: Joi.string().required(),   // Added parentheses
        location: Joi.string().required(),      // Added parentheses
        country: Joi.string().required(),       // Added parentheses
        price: Joi.number().required().min(0),  // Correct usage with parentheses
        image: Joi.string().allow("", null)     // This line is fine as is
    }).required()
});

module.exports = listingSchema;
