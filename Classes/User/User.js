const db = require('../../models');
const utils = require('../../utils/utils');
const user = db.User;

/**
 * Creates a new User
 * @param {*} data
 * @returns
 */
const Create = async (data) => {
  try {
    let newUser = await user.create(data);
    return utils.classResponse(true, newUser, '');
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

/**
 * Fetches User by ID
 * @param {*} userId
 * @returns
 */
const Retrive = async (userId) => {
  try {
    userId = parseInt(userId);
    let fetchUser = await user.findByPk(userId);
    return utils.classResponse(true, fetchUser, '');
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

/**
 * Deletes a User by Id
 * @param {*} userId
 * @returns
 */
const Delete = async (userId) => {
  try {
    userId = parseInt(userId);
    let deletedUserData = await user.destroy({
      where: {
        id: userId,
      },
    });
    return utils.classResponse(true, deletedUserData, '');
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

/**
 * Updates a User By user-ID
 * @param {*} userId
 * @param {*} data
 * @returns
 */
const Update = async (userId, data) => {
  try {
    userId = parseInt(userId);
    let patchedUser = await user.update(data, {
      where: {
        id: userId,
      },
    });
    return utils.classResponse(true, patchedUser, '');
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
