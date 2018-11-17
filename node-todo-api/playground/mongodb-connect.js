// MongoDB module v3
// const MongoClient = require('mongodb').MongoClient;
// 上記の書き方省略
const {MongoClient, ObjectID} = require('mongodb');
let obj = new ObjectID();
console.log(obj);

// 書き方省略
// let user = {name: 'sola', age: 25};
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB serber.');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  // db.collection('Users').insertOne({
  //   name: 'sola',
  //   age: 25,
  //   location: 'Japan'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert users.', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });
  client.close();
});
