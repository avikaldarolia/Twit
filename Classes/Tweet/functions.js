const { Op } = require('sequelize');
const db = require('../../models');
const utils = require('../../utils/utils');

const tweet = db.Tweet;

/**
 * Gets All tweet made by a user
 * @param {*} userId
 * @returns
 */
const allTweetsByUser = async (userId) => {
  userId = parseInt(userId);
  try {
    let tweets = await tweet.findAll({
      where: {
        userId,
      },
    });
    return utils.classResponse(true, tweets, '');
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

/**
 * Fetches all tweets within a start and an end date
 * @param {*} data
 * @returns
 */
const getTweets = async (data) => {
  let startDate = data.startDate;
  let endDate = data.endDate;
  try {
    let tweets = await tweet.findAll({
      where: {
        createdAt: {
          [Op.between]: [startDate, endDate],
        },
      },
    });
    return utils.classResponse(true, tweets, '');
  } catch (err) {
    return utils.classResponse(false, {}, '');
  }
};

module.exports = {
  allTweetsByUser,
  getTweets,
};
