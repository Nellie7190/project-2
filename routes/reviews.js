const router = require("express").Router();
const reviewsCtrl = require('../controllers/review');

router.post('/:id', reviewsCtrl.post);

module.exports = router;
