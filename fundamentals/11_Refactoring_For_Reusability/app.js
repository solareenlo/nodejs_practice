console.log('Starting app.js');

const fs = require('fs');
const _ = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
console.log('Command:', command);
// console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('------------');
    console.log(`Title: ${note.title}`);
    console.log(`body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}