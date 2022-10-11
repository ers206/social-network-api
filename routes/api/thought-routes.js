

const router = require('express').Router();
const {
  getAllThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getThoughtById
} = require('../../controllers/thought-controller');

router
.route('/')
.get(getAllThought);


router
.route('/:userId')
.post(addThought);

router 
.route('/:thoughtId')
.get(getThoughtById)

router
  .route('/:userId/:thoughId')
  .put(addReaction)
  .delete(removeThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;


