const db = require('../../models');
const utils = require('../../utils/utils');

const tweet = db.Tweet;

/**
 * Creates a new tweet
 * @param {*} data
 * @returns
 */
const Create = async (data) => {
  try {
    let new_tweet = await tweet.create(data);
    return utils.classResponse(true, new_tweet, '');
  } catch (err) {
    console.log('We fuucked', err);
  }
};

/**
 * Fetches Tweet by ID
 * @param {*} tweetId
 * @returns
 */
const Retrive = async (tweetId) => {
  try {
    tweetId = parseInt(tweetId);
    let fetch_tweet = await tweet.findByPk(tweetId);
    return utils.classResponse(true, fetch_tweet, '');
  } catch (err) {
    console.log('We fuucked', err);
    return utils.classResponse(false, {}, err);
  }
};

/**
 * Deletes a tweet by Id
 * @param {*} tweetId
 * @returns
 */
const Delete = async (tweetId) => {
  try {
    tweetId = parseInt(tweetId);
    let deleted_tweet_data = await tweet.destroy({
      where: {
        id: tweetId,
      },
    });
    return utils.classResponse(true, deleted_tweet_data, '');
  } catch (err) {
    console.log('We fuucked', err);
    return utils.classResponse(false, {}, err);
  }
};

/**
 * Updates a Tweet By tweet-ID
 * @param {*} tweetId
 * @param {*} data
 * @returns
 */
const Update = async (tweetId, data) => {
  try {
    tweetId = parseInt(tweetId);
    let patchedTweet = await tweet.update(data, {
      where: {
        id: tweetId,
      },
    });
    return utils.classResponse(true, patchedTweet, '');
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};
module.exports = {
  Create,
  Retrive,
  Update,
  Delete,
};
