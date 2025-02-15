const express = require('express');
const router = express.Router();
const { getHandler, postHandler, putHandler, deleteHandler } = require('../middleware');

// setting up middleware for the common routes
router.get(['/users', '/expenses', '/income'], getHandler);
router.post(['/users', '/expenses', '/income'], postHandler);
router.put(['/users/:id', '/expenses/:id', '/income/:id'], putHandler);
router.delete(['/users/:id', '/expenses/:id', '/income/:id'], deleteHandler);

module.exports = router;
