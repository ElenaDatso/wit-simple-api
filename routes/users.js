const express = require('express');
const {
  getDatabase,
  ref,
  get,
  set,
  push,
  update,
  remove,
} = require('firebase/database');

const router = express.Router();
const db = getDatabase();

const newUserDataValidation = ({
  name,
  username,
  email,
  address = {
    street: 'Optional',
    suite: 'Optional',
    city: 'Optional',
    zipcode: 'Optional',
  },
}) => {
  if (
    !name ||
    !username ||
    !email ||
    !address?.street ||
    !address?.suite ||
    !address?.city ||
    !address?.zipcode
  ) {
    return 'Please provide all required fields';
  }
  return { name, username, email, address };
};

router.get('/', async (req, res) => {
  get(ref(db, 'users'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        res.send(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

router.post('/', async (req, res) => {
  const userData = newUserDataValidation(req.body.user);

  if (userData instanceof Error) {
    return res.status(400).send(userData.message);
  }

  try {
    const newUserRef = await push(ref(db, 'users'));
    userData.id = newUserRef.key;
    await set(newUserRef, userData);
    res.status(201).send(userData);
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Unknown error');
  }
});

router.put('/:id', async (req, res) => {
  try {
    await update(ref(db, `users/${req.params.id}`), req.body.updates);
    res.send('Data updated successfully');
  } catch (error) {
    res.status(error.status || 500).send(error.message || 'Unknown error');
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await remove(ref(db, `users/${req.params.id}`));
    res.send('Data deleted successfully');
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Unknown error');
});

module.exports = router;
