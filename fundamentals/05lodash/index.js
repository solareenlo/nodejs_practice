console.log('Starting index.js');

const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('solareenlo'));

var array = _.uniq(['sola', 1, 'sola', 1, 2, 3]);
var array2 = _.uniq([1, 3, 43, 45]);

console.log(array);
console.log(array2);
