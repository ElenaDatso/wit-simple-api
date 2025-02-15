const express = require('express');
const { newDataValidation, updateDataValidation } = require('../utils');
const { userSchema } = require('../schemas');

const router = express.Router();


router.get('/', async (req, res, next) => {
  next();
});

router.post('/', async (req, res, next) => {
  newDataValidation(req.body.data, userSchema);
  next();
});

router.put('/:id', async (req, res, next) => {
  updateDataValidation(req.body.updates, userSchema);
  next();
});

router.delete('/:id', async (req, res, next) => {
  next();
});

module.exports = router;
