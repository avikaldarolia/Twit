const express = require('express');
const router = express.Router();
const user = require('../../controller/user');
router.route('/').post(user.create);
router
  .route('/:id')
  .get(user.getById)
  .delete(user.deleteById)
  .patch(user.updateById);
module.exports = router;
