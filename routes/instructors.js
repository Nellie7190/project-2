const router = require("express").Router();
const instructorsCtrl = require('../controllers/instructors');
const reviewsCtrl = require('../controllers/review');

router.get('/', instructorsCtrl.index);
router.get('/new', instructorsCtrl.newI);
router.delete('/:id', instructorsCtrl.destroy);
router.put('/:id', instructorsCtrl.update);
router.post('/', instructorsCtrl.create);
router.get('/:id/edit', instructorsCtrl.edit);
router.get('/:id', instructorsCtrl.show);

module.exports = router;