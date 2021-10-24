const express = require('express');
const data = require('./data');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log('Hi');
});
