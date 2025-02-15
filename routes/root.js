const express = require('express');
const path = require('path');
const router = express.Router();

// serving the index.html file
router.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } catch (error) {
    res.status(500).send('Unknown error');
  }
});

module.exports = router;
