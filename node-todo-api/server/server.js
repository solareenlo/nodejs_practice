let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let User = mongoose.model('User', {
  user: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    required: true,
    minlength: 1
  }
});

let user = new User({
  user: 'sola',
  email: ' sola@example.com '
});

user.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log('Unable to save', err);
});
