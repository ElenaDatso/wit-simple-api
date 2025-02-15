const expensesRouter = require('./expenses');
const usersRouter = require('./users');
const incomesRouter = require('./incomes');
const commonRouter = require('./common');
const rootRouter = require('./root');

module.exports = { expensesRouter, usersRouter, incomesRouter, commonRouter, rootRouter };
