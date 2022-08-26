const { Router } = require('express');

const router = Router();
router.use('/user', require('./user'));
router.use('/tweet', require('./tweet'));
module.exports = router;
