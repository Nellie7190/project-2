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

const get = (req, res) => {
    Instructor.findById(req.params.id, (err, foundInstructor) => {
        res.json(foundInstructor.reviews);
    });
};

module.exports = {post};