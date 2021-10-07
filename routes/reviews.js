const router = require("express").Router();
const reviewsCtrl = require('../controllers/review');

router.post('/:id', reviewsCtrl.post);
router.get('/:id/:instructorId/edit', reviewsCtrl.put);
router.put('/:id/:instructorId', reviewsCtrl.update);
router.delete('/:id/:instructorId', reviewsCtrl.deleteReview)


module.exports = router;
