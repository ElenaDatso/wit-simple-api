const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Send all expenses');
});

router.post('/', (req, res) => {
  res.send('Add an expense');
});

router.put('/:id', (req, res) => {
  res.send('Update an expense');
});

router.delete('/:id', (req, res) => {
  res.send('Delete an expense');
});

module.exports = router;
