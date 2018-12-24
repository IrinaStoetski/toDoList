const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) => {
	app.get(('/api/lists/:id'), async(req, res) => {
		const query = {_id: ObjectId(req.params.id)};
		let items = [];
		try {
			result = await db.collection('to-do-list').find(query).forEach((element) => {
                items.push(element);
            });
		} catch (err) {
			console.log(err);
		}
		var tempItems = JSON.stringify(items);
		res.send(tempItems);
	})

	app.post(('/lists/:id'), async(req, res) => {
		console.log(req.body.item);
		if(req.body.item != '' || req.body.item.length > 8) {
			const query = {_id: ObjectId(req.params.id)};
			let obj = {
				listObj: {
					_id: new ObjectId(),
					itemObj: req.body.item
				}
			}
			try {
				result = await db.collection('to-do-list').updateMany(query, {$addToSet: obj}, {upsert:true});
			} catch (err) {
				console.log(err);
			}
			res.redirect('/list');
		}
	})
};
