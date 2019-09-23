require('dotenv').config();
require('./db_connection'); // connect to monodb db

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const routes = require('./routes/routes');
app.use('/', routes);

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
