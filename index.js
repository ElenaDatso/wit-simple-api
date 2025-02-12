const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./routes/index.js');
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/users', routers.usersRouter);
app.use('/expenses', routers.expensesRouter);
app.use('/income', routers.incomesRouter);

app.get('/', (req, res) => {
  res.send('A brief description of the REST API and Available Endpoints');
});

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({ error: err.message });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
