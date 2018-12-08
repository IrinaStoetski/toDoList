const MongoClient = require('mongodb').MongoClient;

module.exports = (app, db) => {

app.get('/', async (req, res) => {
	let result = null;
	let notes = [];
	try {
		result = await db.collection('to-do-list').find().forEach(element => {
			notes.push(element);
		});
		console.log(result);
	}	
	catch (err) {
		console.log(err);
	}
/* 	res.send(JSON.stringify(notes)); */

	res.render('main-page', {notes: notes})	
});

}