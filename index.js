const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

let app = express();

MongoClient.connect(db.url, { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log(err);
	}
	const database = client.db(db.dbName);

	require('./routes.js')(app, database);
	
	app.listen(8000, () => {
		console.log('Connected to ' + db.url);
		console.log('We are live on http://localhost:8000');
	});
})