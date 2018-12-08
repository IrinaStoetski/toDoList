/* const MongoClient = require('mongodb').MongoClient;
 const db = require('../../config/db'); 

const allNotes = () => {
MongoClient.connect(db.url, { useNewUrlParser: true }, (err, client) => {

	if (err) return console.log(err);
	const database = client.db(db.dbName);

	let notes = [];
	try {
		result = await db.collection('to-do-list').find().forEach((element) => {
				notes.push(element);
		});
} catch (err) {
		console.log(err);
}
	  return notes;  
});
}
module.exports = allNotes();




	
	
module.exports = allNotes;

 */