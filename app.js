const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const encodedParser = bodyParser.urlencoded({ extended: false });

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
app.post('/contact', encodedParser, (req, res) => {
  console.log(req.body);
  res.render('contact-success', {
    data: req.body,
  });
  // res.send('Welcome, ' + req.body.who)
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
