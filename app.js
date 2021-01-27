const express = require('express');
const app = express();
const { models: { User }} = require('./db');

module.exports = app;

app.use(require('cors')());


app.get('/', (req, res, next)=> res.send('hello'));

app.get('/foo', (req, res, next)=> res.send('bar'));

app.get('/api/users', async(req, res, next)=> {
  res.send(await User.findAll());
});
