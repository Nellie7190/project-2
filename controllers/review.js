const Instructor = require('../models/instructor');

//SHOW
const post = (req, res) => {
    Instructor.findById(req.params.id)
  .then((foundInstructor)=>{
      foundInstructor.reviews.push(req.body);
      foundInstructor.save();
      console.log(foundInstructor);
  })
  .then(()=>{
    res.redirect(`/rate-my-instructor/${req.params.id}`)
  })
};


const put = (req, res) => {
    Instructor.findByIdAndUpdate(req.params.id, (err, foundInstructor) => {
        res.render('edit.ejs', {instructor: foundInstructor, review: foundInstructor.review});
    });
};

module.exports = {
  post,
  put,
};