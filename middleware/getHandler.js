const { ref, get } = require('firebase/database');
const { db } = require('../config/init.js');

// Get data from the database
module.exports = async (req, res, next) => {
  try {
    const snapshot = await get(ref(db, req.path));
    if (snapshot.exists()) {
      res.send(snapshot.val());
    } else {
      res.send('No data available in the database');
    }
  } catch (error) {
    console.error(error);
  }
  next();
};
