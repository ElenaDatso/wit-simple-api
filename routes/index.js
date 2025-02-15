const expensesRouter = require('./expenses');
const usersRouter = require('./users');
const incomeRouter = require('./income');
const commonRouter = require('./common');
const rootRouter = require('./root');

module.exports = { expensesRouter, usersRouter, incomeRouter, commonRouter, rootRouter };
