const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title,body) {

    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {

        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }

    
}

const saveNotes = function (notes) {

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


const loadNotes = function () {
    
    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {

        return []

    }
    
    
}

const removeNote = function (title) {

    const notes = loadNotes()
    
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if ( notes.length > notesToKeep.length) {

        console.log(chalk.bgGreen('Note Removed!'))

        saveNotes(notesToKeep)

    } else {
        console.log(chalk.bgRed('No Note Found!'))
    }

}

const listNotes = function() {

    const notes = loadNotes()

    console.log(chalk.bgRed('Your Notes:'))

    notes.forEach(function (note) {

        console.log(chalk.bgYellow(note.title))

    })
}

const readNote = function (title) {

    const notes = loadNotes()

    const exist = notes.find((note) => note.title === title)

    if(!exist) {
        console.log(chalk.bgRed('Note does not exist.'))
    } else {
        console.log(chalk.bgRed(title))
        console.log(exist.body)
    }


}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}