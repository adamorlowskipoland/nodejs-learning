const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    qs: req.query,
  });
});

app.get('/profile/:name', (req, res) => {
  const data = {
    age: 29,
    job: 'ninja',
    hobbies: [
      'eating',
      'fighting',
      'fishing',
    ],
  };
  res.render('profile', {
    person: req.params.name,
    data,
  });
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(3000);
