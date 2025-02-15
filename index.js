const express = require('express');
require('dotenv').config();
require('./config/init.js');
const cors = require('cors');
const {
  commonRouter,
  usersRouter,
  expensesRouter,
  incomesRouter,
  rootRouter
} = require('./routes');
const { dbRoutes } = require('./schemas');
const { routeValidation } = require('./middleware');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routeValidation);
app.use(dbRoutes.root, rootRouter);
app.use(dbRoutes.users, usersRouter);
app.use(dbRoutes.expenses, expensesRouter);
app.use(dbRoutes.income, incomesRouter);
app.use(commonRouter);

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
