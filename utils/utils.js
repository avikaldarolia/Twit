const asyncMiddleware = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const classResponse = (success = true, data = {}, err = '') => {
  return {
    success,
    data,
    err,
  };
};

const sendResponse = (req, res, next, success = true, data = {}, err = '') => {
  return res.send({
    success,
    data,
    err,
  });
};

const errorHandler = (err = '', req, res, next) => {
  return res.send({
    success: false,
    data: {},
    err: err || 'Something Went Wrong',
  });
};

module.exports = {
  asyncMiddleware,
  classResponse,
  sendResponse,
  errorHandler,
};
