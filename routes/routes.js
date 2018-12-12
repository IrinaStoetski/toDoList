
const mainPage = require('../app/modules/main-page/main');
const addNote = require('../app/modules/notes/create/addNote');
const updateNote = require('../app/modules/notes/update/updateNote');
// const deleteNote = require('../app/modules/notes/delete/deleteNote');
const addList = require('../app/modules/list/addList');

module.exports = (app, db) => {
    mainPage(app, db);
    addNote(app, db);
    updateNote(app, db);
    // deleteNote(app, db);
	addList(app, db);
}
