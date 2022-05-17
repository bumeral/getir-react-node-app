const express = require('express');
const path = require('path');
const { v4 } = require('uuid');
const cors = require('cors');
const { json } = require('body-parser');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const env = require('dotenv').config();
var mongoose = require("mongoose");
const app = express();

app.use(express.static(path.join(__dirname, "/public")))

const PORT = process.env.PORT || 7000;
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:true}));

const uri = env.parsed.mongodburi;

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(uri, {}, function (err, res) {
  if (err) {
    console.log("mongo lab server not connected");
    console.log(err);
  }
  else {
    console.log("Connectd to mongo db");
  }
});
}


let todos = [
  {
    id: v4(),
    title: 'todo 1',
    status: 'awaiting',
  },
  {
    id: v4(),
    title: 'todo 2',
    status: 'awaiting',
  },
  {
    id: v4(),
    title: 'todo 3',
    status: 'completed',
  },
  {
    id: v4(),
    title: 'todo 4',
    status: 'completed',
  },
  {
    id: v4(),
    title: 'todo 5',
    status: 'ongoing',
  },
];

  app.get('/todos', (req, res) => res.send(todos));

  app.post('/todos', (req, res) => {
    const todo = { title: req.body.title, id: v4(), status: 'awaiting' };
    todos.push(todo);
    return res.send(todo);
  });

  app.patch('/todos/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id === id);
    const { status } = req.body;
    if (index > -1) {
      todos[index].status = status;
    }
    return res.send(todos[index]);
  });

  app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id === id);
    if (index > -1) {
      todos.splice(index, 1);
    }
    res.send(todos);
  });

  app.listen(PORT, console.log(`Server is up on port ${PORT}!`));

