
const { ref, remove } = require('firebase/database');
const { db } = require('../config/init.js');

module.exports = async (req, res, next) => {
  try {
    await remove(ref(db, `${req.path}`));
    res.send('Data deleted successfully');
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Unknown error');
  }
};
