const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    //const duplicatedNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen('Note addes'));
    } else {
        console.log(chalk.bgRed('Note title taken'));
    }
}

const saveNotes = (notes) => {
    debugger
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJsON);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesFiltered = notes.filter((note) => note.title !== title);
    if (notes.length === notesFiltered.length) {
        console.log(chalk.bgRed('No note found'));
    } else {
        console.log(chalk.bgGreen('Note removed!'));
        saveNotes(notesFiltered);
    }

}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.bold(chalk.inverse('Your notes ') + note.title));
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title)
    if (foundNote) {
        console.log(chalk.inverse.bold(foundNote.title) + ' ' + foundNote.body)
    }
    else {
        console.log(chalk.red('title was not found'));
    }

}

const loadNotes = () => {
    try {

        return JSON.parse(fs.readFileSync('notes.json').toString());
    }
    catch (error) {
        return [];
    }
}
module.exports = {
    //    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
