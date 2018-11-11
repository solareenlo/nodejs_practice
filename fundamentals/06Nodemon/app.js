console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

let filteredArray = _.uniq(['Mike']);
console.log(filteredArray);
