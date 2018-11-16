const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Taro',
    age: 27
  }, {
    name: 'sola',
    age: 25
  }, {
    name: 'Jiro',
    age: 26
  }]);
});

app.listen(3000);

module.exports.app = app;
