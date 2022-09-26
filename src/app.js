const express = require('express');
const errorHandler = require('./middlewares/erroHandler');
const loginRouter = require('./routes/loginRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.use(errorHandler);
module.exports = app;
