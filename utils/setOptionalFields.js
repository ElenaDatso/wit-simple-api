// This function sets optional fields to default values if they are not provided in the request body.
module.exports = (req) => {
  req.body.address = req.body.address || {};
  req.body.address.suite = req.body.address.suite || 'not set';
  req.body.address.city = req.body.address.city || 'not set';
  req.body.address.zipcode = req.body.address.zipcode || 'not set';
  req.body.address.street = req.body.address.street || 'not set';

  return req.body;
}