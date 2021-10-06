const router = require("express").Router();
const reviewsCtrl = require('../controllers/review');

router.post('/:id', reviewsCtrl.post);
router.get('/:id/edit', reviewsCtrl.edit);


module.exports = router;
