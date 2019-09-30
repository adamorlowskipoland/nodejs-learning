const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('this is the home page')
});

app.get('/contact', (req, res) => {
  res.send('this is the contact page')
});

app.listen(3000);
