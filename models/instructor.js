const mongoose = require('mongoose');

const{Schema} = mongoose;

const reviewSchema = new Schema (
    {
        rating: {type: Number, required: true},
        reviewDesc: {type: String, required: true},
    }
);

const instructorSchema = new Schema (
    {
        name: {type: String, required: true},
        title: {type: String, required: true},
        img: {type: String, required: true},
        reviews: [reviewSchema],
    },
    {
        timestamps: true
    }
);



const Instructor = mongoose.model('Instructor', instructorSchema);


module.exports = Instructor;



// const instructors = [
//     {
//       name: 'Paul',
//       title: 'Instructor',
//       img: 'https://ca.slack-edge.com/T0351JZQ0-UH5HRC0GG-f5669c63c305-512',
//       rating: 0,
//       review: "None"
//     },
//     {
//       name: 'Ira',
//       title: 'Instructor',
//       img: 'https://ca.slack-edge.com/T0351JZQ0-U3TD2R5R8-ab2da0cf04ba-512',
//       rating: 0,
//       review: "None"
//     },
//     {
//       name: 'Ayla',
//       title: 'Instructional Associate',
//       img: 'https://ca.slack-edge.com/T0351JZQ0-UNRN9MW3H-233839b5eb7c-512',
//       rating: 0,
//       review: "None"
//     },
//     {
//       name: 'Maliq',
//       title: 'Instructional Associate',
//       img: 'https://ca.slack-edge.com/T0351JZQ0-U01E29KRAP2-ed49f53af840-512',
//       rating: 0,
//       review: "None"
//     }
//   ]