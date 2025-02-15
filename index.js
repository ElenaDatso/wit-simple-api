const express = require('express');
require('dotenv').config();
require('./config/init.js');
const cors = require('cors');
const {
  commonRouter,
  usersRouter,
  expensesRouter,
  incomeRouter,
  rootRouter
} = require('./routes');
const { dbRoutes } = require('./schemas');
const { routeValidation } = require('./middleware');
const { errorHandler } = require('./middleware');
const port = process.env.PORT || 3000;

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routeValidation);
app.use(dbRoutes.root, rootRouter);
app.use(dbRoutes.users, usersRouter);
app.use(dbRoutes.expenses, expensesRouter);
app.use(dbRoutes.income, incomeRouter);
app.use(commonRouter);

// Error handling
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
