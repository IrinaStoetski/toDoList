 const mainPage = require('../app/modules/main-page/main');
const addNote = require('../app/modules/cards/create/create-card');
const updateNote = require('../app/modules/cards/update/update-card');

module.exports = function(app, db) {
	mainPage(app, db);
    addNote(app, db);
    updateNote(app, db);
}