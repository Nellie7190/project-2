const Review = require('../models/review');
const Instructor = require('../models/instructor');


//DESTROY
const deleteReview = (req, res) => {
  Review.findByIdAndRemove(req.params.id, req.body)
  .then((deleteReview) => {
    console.log(req.params)
    res.redirect(`/${req.params.instructorId}`)
  })
}

//UPDATE
const update = (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
  .then((updatedReview) => {
    console.log(req.params)
    res.redirect(`/${req.params.instructorId}`)
  })
};


//CREATE (appears on SHOW page)
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
    setTimeout(() => {res.redirect(`/${req.params.id}`)}, 100);
  })
};

//EDIT
// const put = (req, res) => {
//   console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//   Review.findById(req.params.id, (err, foundReview) => {
//     console.log(foundReview)
//     res.render('edit.ejs', {review: foundReview});
//   });
// };

//EDIT
const put = (req, res) => {
  Review.findById(req.params.id)
  .then((foundReview) => {
    Instructor.findById(req.params.instructorId)
    .then((foundInstructor) => {
      console.log(foundReview)
      res.render('edit.ejs', {instructor: foundInstructor, review: foundReview})
    })
  })
  
};

module.exports = {
  //CREATE
  post,
  //EDIT
  put,
  //UPDATE
  update,
  //DESTROY
  deleteReview
};