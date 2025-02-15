const { newDataValidation, updateDataValidation } = require('./validation.js');
const commonErrorHandler = require('../middleware/errorHandler.js');
const setOptionalFields = require('./setOptionalFields.js');

module.exports = {
  newDataValidation,
  updateDataValidation,
  commonErrorHandler,
  setOptionalFields,
};
