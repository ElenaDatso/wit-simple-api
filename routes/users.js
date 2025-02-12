const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('All users');
});

router.post('/', (req, res) => {
  res.send('Add a user');
});

router.put('/:id', (req, res) => {
  res.send('Update a user');
});

router.delete('/:id', (req, res) => {
  res.send('Delete a user');
});

module.exports = router;
