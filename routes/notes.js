const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const notesObject = require('../db/db.json');
const fs = require('fs');

notes.get('/', (req,res) => {
    res.json(notesObject);
});

notes.post('/', (req,res) => {
    const newObject = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(),
    }
    console.log(newObject);
    notesObject.push(newObject);
    let newNotesList = JSON.stringify(notesObject, null, 4);
    const response = {
        status: 'success',
      };
    res.json(response);

    fs.writeFile('./db/db.json', newNotesList, (err) => {
        err ? console.error(err) : console.info(`\nData written to database`)
    });
});

// lookup docu on delete functionality

module.exports = notes;