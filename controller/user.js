const db = require('../models');
const _ = require('lodash');
const Constants = require('../Classes/User/constants');
const { asyncMiddleware } = require('../utils/utils');
const User = require('../Classes/User/User');
const utils = require('../utils/utils');

/**
 * Creates a new User
 */
const create = asyncMiddleware(async (req, res, next) => {
  let userData = _.pick(req.body, Constants.CREATE_ATTRIBUTES);
  try {
    let newUser = await User.Create(userData);
    utils.sendResponse(
      req,
      res,
      next,
      newUser.success,
      newUser.data,
      newUser.err
    );
  } catch (err) {
    next(err);
  }
});

/**
 * Fetches User by ID
 */
const getById = asyncMiddleware(async (req, res, next) => {
  const userId = req.params.id;
  try {
    let fetchedUser = await User.Retrive(userId);
    utils.sendResponse(
      req,
      res,
      next,
      fetchedUser.success,
      fetchedUser.data,
      fetchedUser.err
    );
  } catch (err) {
    next(err);
  }
});

/**
 * Deletes a User by Id
 */
const deleteById = asyncMiddleware(async (req, res, next) => {
  const userId = req.params.id;
  try {
    let deletedData = await User.Delete(userId);
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
 * Updates a User By user-ID
 */
const updateById = asyncMiddleware(async (req, res, next) => {
  const userId = req.params.id;
  let data = _.pick(req.body, Constants.UPDATE_ATTRIBUTES);
  try {
    let patchedData = await User.Update(userId, data);
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

module.exports = {
  create,
  deleteById,
  getById,
  updateById,
};
