const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
// const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5bf03470f522d750d4c51020';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((err) => console.log(err));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User By Id', JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));
