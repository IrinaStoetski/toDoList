const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/db');

let app = express();

app.set('views', './app/templates/');
app.set('view engine', 'pug');
/* app.use(express.static(__dirname + '/public')); */
MongoClient.connect(db.url, { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log(err);
	}
	const database = client.db(db.dbName);

	require('./routes/routes.js')(app, database);
	
	app.listen(8000, () => {
		console.log('Connected to ' + db.url);
		console.log('We are live on http://localhost:8000');
	});
})