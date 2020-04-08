const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('GET "/" request received');
  res.status(200).send('yes, got your GET request');
});

app.post('/', (req, res) => {
  console.log('POST "/" request received');
  res.status(200).send('yes, got your POST request');
});

app.put('/', (req, res) => {
  console.log('PUT "/" request received');
  res.status(200).send('yes, got your PUT request');
});

app.options('/', (req, res) => {
  console.log('OPTIONS "/" request received');
  res.status(200).send('yes, got your OPTIONS request');
});

app.delete('/', (req, res) => {
  console.log('DELETE "/" request received');
  res.status(200).send('yes, got your DELETE request');
});

app.listen(port, () => {
  console.log('bare bones acknowledgement server is listening on port 3000');
});