const express = require('express');
const {
  newDataValidation,
  updateDataValidation,
  setOptionalFields,
} = require('../utils');
const { userSchema } = require('../schemas');

const router = express.Router();

router.get('/', async (req, res, next) => {
  next();
});

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

router.delete('/:id', async (req, res, next) => {
  next();
});

module.exports = router;
