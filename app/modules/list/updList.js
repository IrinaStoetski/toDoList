const express = require('express');
const app = express();
const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) => {

	app.get('/updget/:id', async (req, res) =>{
		let result = null;

		const query = {_id: ObjectId(req.params.id)};
        try {
			result = await db.collection('to-do-list').findOne(query);
        } catch (err) {
            console.log(err);
        }
		const showData = {
			id: query._id,
			title: result.title,
			description: result.description,
		};
		console.log(res);
		res.render('updList', {id: showData.id, title: showData.title, description: showData.description});
	});

	app.put('/updPut/:id', async (req, res) => {
		const query = { _id: ObjectId(req.params.id) };
		const newData = {
		  _id: query._id,
		  title: req.body.title,
		  description: req.body.description,
		};
		let result = null;
		try {
		  result = await db.collection('to-do-list').updateOne(query, { $set: newData }, { upsert: true });
		} catch (err) {
		  console.log(err);
		}
		res.render('list');
	});
}
