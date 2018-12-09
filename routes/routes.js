 const mainPage = require('../app/modules/main-page/main');


const addNote = require('../app/modules/cards/create/addNote');
const updateNote = require('../app/modules/cards/update/updateNote');
const deleteNote = require('../app/modules/cards/delete/deleteNote');

module.exports = function(app, db) {
	mainPage(app, db);
    addNote(app, db);
    updateNote(app, db);
    deleteNote(app, db);
}