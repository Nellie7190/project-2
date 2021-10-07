//Require Schemas
const Instructor = require('../models/instructor');


//INDEX
const index = (req, res) => {
    Instructor.find({}, (error, allInstructors) => {
        res.render('index.ejs', { instructors: allInstructors });
    });
};

//NEW
const newI = (req, res) => {
    res.render('new.ejs');
};



//If delete breaks, fix URL
//DESTROY
const destroy = (req, res) => {
    Instructor.findByIdAndRemove(req.params.id,
        (err, data) => {
            res.redirect('/rate-my-instructor');
        });
};

//UPDATE
const update = (req, res) => {
    // Instructor.findByIdAndUpdate(req.params.id, req.body, {
    //     new: true,
    // }, (error, updatedInstructor) => {
    //     res.redirect(`/rate-my-instructor/${req.params.id}`)
    // })
    // console.log(instructors.reviews)
    res.send('this is the UPDATE INSTRUCTOR ROUTE')
};

//CREATE
const create = (req, res) => {
    Instructor.create(req.body, (error, createdInstructor) => {
        console.log(createdInstructor);
        res.redirect('/rate-my-instructor');
    });
};

//EDIT
const edit = (req, res) => {
    // Instructor.findById()
    // .populate('reviews')
    // .then((foundReviews) => {
    //     res.render('edit.ejs', {review: foundReviews})
    // })
    console.log('first console log works');
    Instructor.findById(req.params.id, (err, foundInstructor) => {
        res.render('edit.ejs', {
            instructor: foundInstructor,
            // reviews: foundInstructor.reviews,
        });
    });
};

//SHOW
const show = (req, res) => {
    Instructor.findById(req.params.id) 
    .populate('reviews')
    .then((foundInstructor) => {
        res.render('show.ejs', {instructor: foundInstructor, reviews: foundInstructor.reviews})
    })
};

module.exports = {
    show,
    index,
    newI,
    destroy,
    update,
    create,
    edit,
}
