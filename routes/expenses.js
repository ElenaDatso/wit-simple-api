const express = require('express');
const { newDataValidation, updateDataValidation } = require('../utils');
const {expenseSchema} = require('../schemas');
const router = express.Router();

router.get('/', (req, res, next) => {
  next();
});
router.post('/', (req, res, next) => {
  newDataValidation(req.body.data, expenseSchema);
  next();
});
router.put('/:id', (req, res, next) => {
  updateDataValidation(req.body.updates, expenseSchema);
  next();
});
router.delete('/:id', (req, res, next) => {
  next();
});

module.exports = router;
