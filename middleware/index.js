const getHandler = require('./getHandler');
const postHandler = require('./postHandler');
const putHandler = require('./putHandler');
const deleteHandler = require('./deleteHandler');
const routeValidation = require('./routeValidation');
const errorHandler = require('./errorHandler');

module.exports = {
  getHandler,
  postHandler,
  putHandler,
  deleteHandler,
  routeValidation,
  errorHandler
};
