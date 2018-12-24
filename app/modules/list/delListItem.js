const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) => {
	app.put(('/delete/:id'), async(req, res) => {
		const query = {_id: ObjectId(req.params.id)};
		const newData = {
			_id: query._id,
			itemid: req.body.itemid,
		};
		console.log(newData);
		let arr = [];
		let result = null;
		try {
			result = await db.collection('to-do-list').findOne(query);
			arr = (result.listObj).filter(function(element){
				if(element._id != req.body.itemid) {
					return element;
				}
			})
			result = await db.collection('to-do-list').updateOne(query, { $set: {listObj: arr}}, { upsert: true });
		} catch (err) {
			console.log(err);
		}
	})
};
