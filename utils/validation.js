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

module.exports = { newUserDataValidation };