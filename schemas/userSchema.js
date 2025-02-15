const adressSchema = {
    street: 'Optional',
    suite: 'Optional',
    city: 'Optional',
    zipcode: 'Optional',
  }

const userSchema = {
  name: null,
  username: null,
  email: null,
  address: adressSchema,
};
module.exports = userSchema;