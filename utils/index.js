const { newDataValidation, updateDataValidation } = require('./validation.js');
const commonErrorHandler = require('./errorHandler.js');
const setOptionalFields = require('./setOptionalFields.js');

module.exports = {
  newDataValidation,
  updateDataValidation,
  commonErrorHandler,
  setOptionalFields,
};
