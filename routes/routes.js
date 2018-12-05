 const mainPage = require('../app/modules/main-page/main');


const addNote = require('../app/modules/cards/create/create-card');

module.exports = function(app, db) {
	mainPage(app, db);
    addNote(app, db);
}