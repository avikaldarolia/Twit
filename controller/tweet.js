const db = require('../models');
const _ = require('lodash');
const Constants = require('../Classes/Tweet/constants');
const { asyncMiddleware } = require('../utils/utils');
const Tweet = require('../Classes/Tweet/Tweet');
const { allTweetsByUser, getTweets } = require('../Classes/Tweet/functions');
const utils = require('../utils/utils');

/**
 * Creates a new tweet
 */
const create = asyncMiddleware(async (req, res, next) => {
  let tweetData = _.pick(req.body, Constants.CREATE_ATTRIBUTES);
  try {
    let new_tweet = await Tweet.Create(tweetData);
    utils.sendResponse(
      req,
      res,
      next,
      new_tweet.success,
      new_tweet.data,
      new_tweet.err
    );
  } catch (err) {
    next(err);
  }
});

/**
 * Fetches Tweet by ID
 */
const getById = asyncMiddleware(async (req, res, next) => {
  const tweetId = req.params.id;
  try {
    let fetchedTweet = await Tweet.Retrive(tweetId);
    utils.sendResponse(
      req,
      res,
      next,
      fetchedTweet.success,
      fetchedTweet.data,
      fetchedTweet.err
    );
  } catch (err) {
    next(err);
  }
});

/**
 * Deletes Tweet by ID
 */
const deleteById = asyncMiddleware(async (req, res, next) => {
  const tweetId = req.params.id;
  try {
    let deletedData = await Tweet.Delete(tweetId);
    utils.sendResponse(
      req,
      res,
      next,
      deletedData.success,
      deletedData.data,
      deletedData.err
    );
  } catch (err) {
    next(err);
  }
});

/**
 * Updates Tweet By tweet-ID
 */
const updateById = asyncMiddleware(async (req, res, next) => {
  const userId = req.params.id;
  let data = _.pick(req.body, Constants.UPDATE_ATTRIBUTES);
  try {
    let patchedData = await Tweet.Update(userId, data);
    utils.sendResponse(
      req,
      res,
      next,
      patchedData.success,
      patchedData.data,
      patchedData.err
    );
  } catch (err) {
    next(err);
  }
});

/**
 * Get All Tweets by User
 */
const getTweetsByUser = asyncMiddleware(async (req, res, next) => {
  const userId = req.params.id;
  try {
    let tweets = await allTweetsByUser(userId);
    utils.sendResponse(req, res, next, tweets.success, tweets.data, tweets.err);
  } catch (err) {
    next(err);
  }
});

/**
 * Gets All Tweets between Dates for now
 */
const getAllTweets = asyncMiddleware(async (req, res, next) => {
  let data = _.pick(req.body, Constants.GET_ATTRIBUTES);
  try {
    let tweets = await getTweets(data);
    utils.sendResponse(req, res, next, tweets.success, tweets.data, tweets.err);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = {
  create,
  getById,
  deleteById,
  updateById,
  getTweetsByUser,
  getAllTweets,
};
