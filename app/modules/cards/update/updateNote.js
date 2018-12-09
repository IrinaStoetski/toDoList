const express = require('express');
let app = express();
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const methodOverride = require('method-override');
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
// app.use(methodOverride('_method', { methods: ['POST', 'PUT'] }));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

module.exports = (app, db) =>{
    app.get('/notes/:id', async (req, res) =>{
        const query = {_id: ObjectId(req.params.id)};

        let result = null;
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
        res.render('updateNote', {id: showData.id, title: showData.title, description: showData.description});
        res.send('ok');
    });

    app.post('/notes/:id', async (req, res)=>{
        const query = {_id: ObjectId(req.params.id)};
        const newData = {
            title: req.body.title,
            description: req.body.description,
        };
        let result = null;

        try {
            result = await db.collection('to-do-list').updateOne(query, {$set: newData}, {upsert: true});
        } catch (err) {
            console.log(err);
        }
        // res.send('update note');

        // const notes = [];
        //
        // try {
        //     result = await db.collection('to-do-list').find().forEach((element) => {
        //         notes.push(element);
        //     });
        // } catch (err) {
        //     console.log(err);
        // }

        res.redirect("/");
        // res.render('main-page', {notes: notes});
    });
};
