const express = require('express');
const router = express.Router();
const Tweet = require('../../controller/tweet');
router.route('/').post(Tweet.create).get(Tweet.getAllTweets);

router
  .route('/:id')
  .get(Tweet.getById)
  .delete(Tweet.deleteById)
  .patch(Tweet.updateById);

router.route('/user/:id').get(Tweet.getTweetsByUser);

module.exports = router;
