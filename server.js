const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const sequelize = require('./sequelize');
const utils = require('./utils/utils');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

require(__dirname + '/routes/').forEach(function (route) {
  app.use(route.prefix, route.app);
});

app.use(utils.errorHandler);

app.get('/', (req, res) => {
  res.send('Hellooo World!');
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
