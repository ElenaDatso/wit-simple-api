const { ref, set, push } = require('firebase/database');
const { db } = require('../config/init.js');

module.exports = async (req, res, next) => {
  try {
    const newUserRef = await push(ref(db, req.path));
    await set(newUserRef, { id: newUserRef.key, ...req.body });
    res.status(201).send({ id: newUserRef.key, ...req.body });
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Unknown error');
  }
  next();
};
