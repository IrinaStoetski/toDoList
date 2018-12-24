const express = require('express');
const app = express();


module.exports = (app, db) => {
	app.get('/list', async (req, res) =>{
		res.render('list');
	});

	app.get('/getlist', async (req, res) =>{ 	// Обращение ajax, получить данные
		const items = [];
		try {
			result = await db.collection('to-do-list').find({name:"tasks"}).forEach((element) => {	//найти заметки по ключу "tasks"
                items.push(element);
            });

		} catch (err) {
			console.log(err);
		}
		var tempItems = JSON.stringify(items);
		res.send(tempItems);					// вернуть список axios
    });

	app.get('/list-add', async (req, res) =>{	// <a> ccылаеться на добавление заметки
		res.render('addList');					// вернуть pug страницу
    });

	app.post('/lists-items', async (req, res) => {	// <form> ccылается на добавление
		const newitems = {
			name: "tasks",
            title: req.body.title,
            description: req.body.description,
			listObj: []
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
		res.redirect('/');
    });
};
