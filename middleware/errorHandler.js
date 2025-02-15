// Error handler middleware
const errorHandler = (err, req, res, next) => {
  const statusCode =
    err.statusCode && !isNaN(err.statusCode) ? err.statusCode : 500;

  return res.status(statusCode).json({
    error: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;
