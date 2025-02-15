// contains the validation functions for the data that is being sent to the server.
const newDataValidation = (data, schema) => {
  for (const key in data) {
    if (key === 'id') {
      throw new Error(`The field ${key} is not allowed and set automatically`);
    }
    if (typeof data[key] === 'object') {
      newDataValidation(data[key], schema[key]);
    }
    if (
      data[key] === null ||
      data[key] === undefined ||
      data[key] === ''
    ) {
      throw new Error(
        `Please provide all required fields, the failed field is ${key}`
      );
    } else if (!schema.hasOwnProperty(key)) {
      throw new Error(`The field ${key} is not allowed in the schema`);
    }
  }
  for (const key in schema) {
    if (!(key in data)) {
      throw new Error(
        `Please provide all required fields, the missing field is ${key}`
      );
    }
}}

// Update data validation
const updateDataValidation = (data, schema) => {
  for (const key in data) {
    if (typeof data[key] === 'object') {
      updateDataValidation(data[key], schema[key]);
    }
    if (!schema.hasOwnProperty(key)) {
      if (key === 'id') {
        throw new Error(`The field ${key} is set automatically`);
      }
      throw new Error(`The field ${key} is not allowed in the schema`);
    }
  }
};

module.exports = { newDataValidation, updateDataValidation };
