const { ref, get, set, push, update, remove } = require('firebase/database');
const { db } = require('../config/init.js');

// Update data in the database
module.exports = async (req, res, next) => {
  try {
    const snapshot = await get(child(ref(db), `${req.path}`));
    if (!snapshot.exists()) {
      return res.status(404).send('Data not found');
    }
    await update(ref(db, `${req.path}`), { ...req.body });
    res.send('Data updated successfully');
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Unknown error');
  }
  next();
};
