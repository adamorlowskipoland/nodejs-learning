const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create bodyParser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// connect to the database mlab.com
mongoose.connect('mongodb://yourUserName:yourPassword@ds121534.mlab.com:21534/todo-nodejs-tutorial');


// create a schema - this is like a bluepring
const todoSchema = new mongoose.Schema({
  item: String,
});

// create model
const Todo = mongoose.model('Todo', todoSchema);



module.exports = (app) => {
  app.get('/todo', (req, res) => {
    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render('todo', { todos: data });
    });
  });

  app.post('/todo', urlencodedParser, (req, res) => {
    Todo(req.body)
      .save((err, data) => {
        if (err) throw err;
        res.json({ todos: data });
      });
  });

  app.delete('/todo/:item', (req, res) => {
    Todo
      .find({
        item: req.params.item.replace(/-/g, ' '),
      })
      .deleteOne((err, data) => {
        if (err) throw err;
        res.json({ todos: data });
      });
  });
};
