const express = require('express');
const { newDataValidation, updateDataValidation, setOptionalFields } = require('../utils');
const { userSchema } = require('../schemas');

const router = express.Router();


router.get('/', async (req, res, next) => {
  next();
});

router.post('/', async (req, res, next) => {
  req.body = {...req.body, ...setOptionalFields(req)}
  newDataValidation(req.body, userSchema);
  next();
});

router.put('/:id', async (req, res, next) => {
  updateDataValidation(req.body, userSchema);
  next();
});

router.delete('/:id', async (req, res, next) => {
  next();
});

module.exports = router;
