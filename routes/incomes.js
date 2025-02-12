const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Send all incomes');
});
router.post('/', (req, res) => {
  res.send('Add an income');
});
router.put('/:id', (req, res) => {
  res.send('Update an income');
});
router.delete('/:id', (req, res) => {
  res.send('Delete an income');
});

module.exports = router;
