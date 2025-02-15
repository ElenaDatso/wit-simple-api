const { ref, get, remove, child } = require('firebase/database');
const { db } = require('../config/init.js');

// Delete data from the database
module.exports = async (req, res, next) => {
  try {
    const snapshot = await get(child(ref(db), `${req.path}`));
    if (!snapshot.exists()) {
      return res.status(404).send('Data not found');
    }
    await remove(ref(db, `${req.path}`));
    res.send('Data deleted successfully');
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Unknown error');
  }
};
