const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// routes
const api = require('./routes/api/server');

app.use('/server', api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;