const mongoose = require('mongoose');

const{Schema} = mongoose;
const reviewSchema = new Schema (
    {
        rating: {type: Number, required: true},
        reviewDesc: {type: String, required: true},
    }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;