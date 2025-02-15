const newDataValidation = (data, schema) => {
  for (const key in data) {
    if (typeof data[key] === 'object') {
      newDataValidation(data[key], schema[key]);
    }
    if (
      !schema.hasOwnProperty(key) ||
      data[key] === null ||
      data[key] === undefined ||
      data[key] === ''
    ) {
      if (key === 'id') {
        throw new Error(`The field ${key} is not allowed and set automatically`);
      }
      throw new Error(
        `Please provide all required fields, the failed field is ${key}`
      );
    }
  }
};

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
