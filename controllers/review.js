const Review = require('../models/review');
const Instructor = require('../models/instructor');

//SHOW
const post = (req, res) => {
    Instructor.findById(req.params.id)
  .then((foundInstructor)=>{
      Review.create(req.body)
      .then((singleReview) => {
        // console.log(singleReview._id)
        foundInstructor.reviews.push(singleReview._id);
        foundInstructor.save();
        // console.log(foundInstructor);
      })
  })
  .then(()=>{
    setTimeout(() => {res.redirect(`/rate-my-instructor/${req.params.id}`)}, 100);
  })
};

//EDIT
const put = (req, res) => {
  console.log('EVERYTHING IS FINE')

    Review.findById(req.params.id, (err, foundReview) => {
      console.log(foundReview)
      res.render('edit.ejs', {review: foundReview});
    });
};
module.exports = {
  post,
  put,
};