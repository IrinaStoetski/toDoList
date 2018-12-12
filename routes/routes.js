
const mainPage = require('../app/modules/main-page/main');
const addNote = require('../app/modules/cards/create/addNote');
const updateNote = require('../app/modules/cards/update/updateNote');

//Items
const addList = require('../app/modules/list/addList');

module.exports = (app, db) => {
    mainPage(app, db);
    addNote(app, db);
    updateNote(app, db);

	//Items
	addList(app, db);
}
