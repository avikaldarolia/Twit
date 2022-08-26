// const db = require('../../models');

// const user = db.User;
// const { asyncMiddleware } = require('../../utils/utils');

// const getUserById = asyncMiddleware(async (req, res, next) => {
//   const user_id = req.params.id;

//   try {
//     let fetch_user = await user.findByPk(user_id);
//     console.log(fetch_user);
//     res.status(200).send('User Fetched');
//   } catch (error) {
//     console.log('We fuucked', error);
//   }
// });

// const deleteUser = asyncMiddleware(async (req, res, next) => {
//   const user_id = req.params.id;
//   try {
//     await user.destroy({
//       where: {
//         id: user_id,
//       },
//     });
//     res.send('user deleted');
//   } catch (error) {
//     console.log('We fuucked', error);
//   }
// });

// module.exports = {
//   getUserById,
//   deleteUser,
// };
