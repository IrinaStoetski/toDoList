const MongoClient = require('mongodb').MongoClient;

module.exports = (app, db) => {

app.get('/', async (req, res) => {
	let result = null;
	let notes = [];
	try {
		result = await db.collection('notes').find().forEach(element => {
			arrProducts.push(element);
		});
		console.log(result);
	}	
	catch (err) {
		console.log(err);
	}
	res.send(JSON.stringify(notes));

	res.render('main-page', {title: 'To do list', message: 'Hi!'})	
});

}