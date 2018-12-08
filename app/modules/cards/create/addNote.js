const express = require('express');
const app = express();

module.exports = (app, db) => {
    // app.route('/notes')
    app.get('/notes', (req, res) => {
        res.render('addNote');
    })

    app.post('/api/notes', async (req, res) => {
            let newnotes = {
                title: req.body.title,
                description: req.body.description
            }

            let result = null;

            try {
                result = await db.collection('to-do-list').insertOne(newnotes);
            } catch (err) {
                console.log(err);
            }

            // res.send('add notes');
            res.render('main-page', {notes: notes})
        }
    )
}