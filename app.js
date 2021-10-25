const { request } = require('express');
const express = require('express');
const data = require('./data');

const app = express();
app.use(express.json());
const port = 8000;
app.listen(port, () => {
  console.log('Hi test');
});

app.get('/', (req, res) => {
  res.json(data);
});

app.post('/api/products', (req, res) => {
  const body = req.body;
  res.statusCode = 201;
  res.json(body);
});

app.delete('/api/products/:productId', (req, res) => {
  const id = +req.params.productId;
  const isExist = data.find((item) => item.id === id);
  if (isExist) {
    res.statusCode = 204;
    const updatedData = data.filter(
      (item) => item.id !== +req.params.productId
    );
    res.json(updatedData);
  } else {
    res.statusCode = 404;
    res.json({
      message: 'item not exisit',
    });
  }
});
