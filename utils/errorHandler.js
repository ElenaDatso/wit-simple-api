const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  return res.status(err.statusCode || 500).json({ error: err.message });
}

module.exports = errorHandler;
