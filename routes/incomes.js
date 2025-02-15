const express = require('express');
const { newDataValidation, updateDataValidation } = require('../utils');
const { incomeSchema } = require('../schemas');
const router = express.Router();

router.get('/', (req, res, next) => {
  next();
});
router.post('/', (req, res, next) => {
  newDataValidation(req.body, incomeSchema);
  next();
});
router.put('/:id', (req, res, next) => {
  updateDataValidation(req.body, incomeSchema);
  next();
});
router.delete('/:id', (req, res, next) => {
  next();
});

module.exports = router;
