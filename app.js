const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(cors());
app.use(express.json());


app.post('/api/signup', controller.sigup);
app.post('/api/signin', controller.signin)
module.exports = app;