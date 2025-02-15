const express = require('express');
const {
  newDataValidation,
  updateDataValidation,
  setOptionalFields,
} = require('../utils');
const { userSchema } = require('../schemas');

const router = express.Router();

// setting up the optional fields and validating the data for creation
router.post('/', async (req, res, next) => {
  req.body = { ...req.body, ...setOptionalFields(req) };
  try {
    newDataValidation(req.body, userSchema);
  } catch (error) {
    return res
      .status(error.status || 500)
      .send(error.message || 'Unknown error');
  }
  next();
});

// validating the data for update
router.put('/:id', async (req, res, next) => {
  try {
    updateDataValidation(req.body, userSchema);
  } catch (error) {
    return res
      .status(error.status || 500)
      .send(error.message || 'Unknown error');
  }
  next();
});

module.exports = router;
