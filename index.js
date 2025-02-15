const express = require('express');
require('dotenv').config();
require('./config/init.js');
const cors = require('cors');
const {
  commonRouter,
  usersRouter,
  expensesRouter,
  incomesRouter,
} = require('./routes');
const { dbRoutes } = require('./schemas');
const {routeValidation} = require('./middleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routeValidation);

app.use(dbRoutes.users, usersRouter);
app.use(dbRoutes.expenses, expensesRouter);
app.use(dbRoutes.income, incomesRouter);

app.use(commonRouter);

app.get(dbRoutes.root, (req, res) => {
  res.send('A brief description of the REST API and Available Endpoints');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
