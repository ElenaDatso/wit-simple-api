const userSchema = require('./userSchema');
const expenseSchema = require('./expenseSchema');
const incomeSchema = require('./incomeSchema');
const {dbRoutes, dbParams} = require('./dbRoutes');

module.exports = {
  userSchema,
  expenseSchema,
  incomeSchema,
  dbRoutes,
  dbParams,
};
