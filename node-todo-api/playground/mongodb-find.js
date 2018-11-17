const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5befd8d548959e40051f7e41')
  // }).toArray().then((docs) => {
  //   console.log('Todes');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unalbe to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  // });

  db.collection('Users').find({name: 'sola'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`Unable to fetch Users.`, err);
  });

  db.collection('Users').find({name: 'sola'}).count().then((count) => {
    console.log(`sola count: ${count}`);
  }, (err) => {
    console.log(`Unable to fetch Users.`, err);
  });

  client.close();
});
