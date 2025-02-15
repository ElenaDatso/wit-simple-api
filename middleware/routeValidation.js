const { dbRoutes, dbParams } = require('../schemas');

// remove the last slash from the path
const slashSlicer = (path) => {
  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path;
};

// Middleware to validate the route
module.exports = (req, res, next) => {
  if (req.path === '/') {
    return next();
  }
  let path = slashSlicer(req.path);
  path = '/' + path.split('/')[1]
  if (!Object.values(dbRoutes).includes(path)) {
    return res.status(404).json({ error: 'Invalid route' });
  }
  next();
};
