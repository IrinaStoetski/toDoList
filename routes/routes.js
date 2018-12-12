
const mainPage = require('../app/modules/main-page/main');
const addNote = require('../app/modules/notes/create/addNote');
const updateNote = require('../app/modules/notes/update/updateNote');
const addList = require('../app/modules/list/addList');

module.exports = (app, db) => {
    mainPage(app, db);
    addNote(app, db);
    updateNote(app, db);
	addList(app, db);
}
