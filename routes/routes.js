const mainPage = require('../app/modules/main-page/main');
const addNote = require('../app/modules/cards/create/addNote');
const updateNote = require('../app/modules/cards/update/updateNote');

module.exports = (app, db) => {
    mainPage(app, db);
    addNote(app, db);
    updateNote(app, db);
}