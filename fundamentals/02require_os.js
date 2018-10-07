console.log('Starting 02require_os.js');

const os = require('os');

var user = os.userInfo();

console.log(user);
console.log('Hello ' + user.username + '!');
