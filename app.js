const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body for the input",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);

    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    title: {
        describe: 'note title',
        demandOption: true,
        type: 'string'
    },

    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    title: {
        describe: 'note title',
        demandOption: true,
        type: 'string'
    },
    handler(argv) {
        notes.readNote(argv.title);

    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler() {
        notes.listNotes();
    }
})
// add, remove, read, list

yargs.parse();

