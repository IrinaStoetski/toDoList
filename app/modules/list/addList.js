const express = require('express');
const app = express();


module.exports = (app, db) => {

	app.get('/lists', async (req, res) =>{
		res.render('addList');
    });

	app.get('/lists-items', async (req, res) =>{
		const items = [];
		try {
			result = await db.collection('to-do-list').find().forEach((element) => {
                items.push(element);
            });

		} catch (err) {
			console.log(err);
		}
		var tempItems = JSON.stringify(items);
		res.send(tempItems);
    });


	app.post('/lists', async (req, res) => {
		const newitems = {
			name: "tasks",
            title: req.body.title,
            description: req.body.description,
        };

        let result = null;

		try {
			if (newitems.title != null || newitems.description != null) {
				result = await db.collection('to-do-list').insertOne(newitems);
			} else {
				throw new Error('No data in field');
			}
		} catch (err) {
			console.log(err);
		}
		res.redirect('/lists');
    });
}

//app.get('/lists', async (req, res) =>{
//		let query = {name: 'task'}
//		try {
//			result = await db.collection('tasks').find({}).toArray(function(err, result) {
//				if (err) throw err;
//				res.end(JSON.stringify(result));
//			});
//		} catch (err) {
//			console.log(err);
//		}
//        //res.render('addItem');
//    });
