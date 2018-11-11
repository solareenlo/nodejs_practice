console.log('Starting app.js');

const fs = require('fs');
const _ = require('fs');

const notes = require('./notes.js');

let command = process.argv[2];
console.log('Command:', command);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removeing note');
} else {
  console.log('Command not recognized');
}
