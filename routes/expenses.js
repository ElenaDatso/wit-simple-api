const express = require('express');
const { newDataValidation, updateDataValidation } = require('../utils');
const { expenseSchema } = require('../schemas');
const router = express.Router();

// validating the data for creation
router.post('/', (req, res, next) => {
  try {
    newDataValidation(req.body, expenseSchema);
  } catch (error) {
    return res
      .status(error.status || 500)
      .send(error.message || 'Unknown error');
  }
  next();
});

// validating the data for update
router.put('/:id', (req, res, next) => {
  try {
    updateDataValidation(req.body, expenseSchema);
  } catch (error) {
    return res
      .status(error.status || 500)
      .send(error.message || 'Unknown error');
  }
  next();
});


module.exports = router;
