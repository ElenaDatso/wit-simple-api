const express = require('express');
const { newDataValidation, updateDataValidation } = require('../utils');
const { expenseSchema } = require('../schemas');
const router = express.Router();

router.get('/', (req, res, next) => {
  next();
});
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
router.delete('/:id', (req, res, next) => {
  next();
});

module.exports = router;
